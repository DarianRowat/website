import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "nsid-tracker-v1";

function money(n) {
  const x = Number(n || 0);
  return x.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

function toCsv(rows) {
  const header = ["date", "nsid", "firstName", "lastName", "amount"];
  const esc = (v) => {
    const s = String(v ?? "");
    if (/[",\n]/.test(s)) return `"${s.replaceAll('"', '""')}"`;
    return s;
  };
  const lines = [header.join(",")];
  for (const r of rows) {
    lines.push([r.date, r.nsid, r.firstName, r.lastName, r.amount].map(esc).join(","));
  }
  return lines.join("\n");
}

export default function Tracker() {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({ nsid: "", amount: "", firstName: "", lastName: "" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setRows(parsed);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
    } catch {
      // ignore
    }
  }, [rows]);

  const totalByNsid = useMemo(() => {
    const map = new Map();
    for (const r of rows) {
      const k = (r.nsid || "").toLowerCase();
      map.set(k, (map.get(k) || 0) + Number(r.amount || 0));
    }
    return map;
  }, [rows]);

  const grandTotal = useMemo(() => {
    let s = 0;
    for (const v of totalByNsid.values()) s += v;
    return s;
  }, [totalByNsid]);

  function addRow(e) {
    e.preventDefault();
    const nsid = form.nsid.trim();
    const firstName = form.firstName.trim();
    const lastName = form.lastName.trim();
    const amount = Number(form.amount);
    if (!nsid || !firstName || !lastName || !isFinite(amount) || amount < 0) return;

    const date = new Date().toISOString().slice(0, 10);
    setRows((prev) => [
      { id: crypto.randomUUID?.() || String(Date.now()), date, nsid, firstName, lastName, amount },
      ...prev,
    ]);
    setForm({ nsid: "", amount: "", firstName: "", lastName: "" });
  }

  function removeRow(id) {
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  function clearAll() {
    if (!confirm("Clear all entries?")) return;
    setRows([]);
  }

  function exportCsv() {
    const csv = toCsv(rows);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "nsid-tracker.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={addRow} className="rounded-2xl border border-highlight/15 bg-panel/60 p-5 backdrop-blur">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-highlight">NSID Amount Tracker</div>
            <div className="mt-1 text-xs text-text/70">Saved in your browser (localStorage).</div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={exportCsv}
              className="rounded-lg border border-highlight/25 bg-bg/40 px-3 py-2 text-xs text-text/90 hover:border-highlight/40 hover:bg-bg/60"
            >
              Export CSV
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="rounded-lg border border-red-500/30 bg-bg/40 px-3 py-2 text-xs text-text/90 hover:border-red-500/50 hover:bg-bg/60"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-sm text-text/80">NSID</label>
            <input
              value={form.nsid}
              onChange={(e) => setForm((p) => ({ ...p, nsid: e.target.value }))}
              placeholder="ddr271"
              className="mt-1 w-full rounded-lg border border-highlight/15 bg-bg/40 px-3 py-2 text-sm text-text placeholder:text-text/40 focus:border-highlight/50 focus:outline-none focus:ring-2 focus:ring-highlight/20"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-text/80">Amount ($)</label>
            <input
              value={form.amount}
              onChange={(e) => setForm((p) => ({ ...p, amount: e.target.value }))}
              type="number"
              step="0.01"
              min="0"
              placeholder="10.00"
              className="mt-1 w-full rounded-lg border border-highlight/15 bg-bg/40 px-3 py-2 text-sm text-text placeholder:text-text/40 focus:border-highlight/50 focus:outline-none focus:ring-2 focus:ring-highlight/20"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-text/80">First name</label>
            <input
              value={form.firstName}
              onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
              placeholder="Darian"
              className="mt-1 w-full rounded-lg border border-highlight/15 bg-bg/40 px-3 py-2 text-sm text-text placeholder:text-text/40 focus:border-highlight/50 focus:outline-none focus:ring-2 focus:ring-highlight/20"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-text/80">Last name</label>
            <input
              value={form.lastName}
              onChange={(e) => setForm((p) => ({ ...p, lastName: e.target.value }))}
              placeholder="Rowat"
              className="mt-1 w-full rounded-lg border border-highlight/15 bg-bg/40 px-3 py-2 text-sm text-text placeholder:text-text/40 focus:border-highlight/50 focus:outline-none focus:ring-2 focus:ring-highlight/20"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-highlight px-4 py-2 text-sm font-semibold text-bg shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-highlight/60 focus:ring-offset-2 focus:ring-offset-bg"
        >
          Add entry
        </button>

        <div className="mt-4 rounded-xl border border-highlight/10 bg-bg/30 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-text/70">Grand total</div>
          <div className="mt-1 text-2xl font-bold text-highlight">{money(grandTotal)}</div>
          <div className="mt-1 text-xs text-text/70">{rows.length} entries</div>
        </div>
      </form>

      <div className="rounded-2xl border border-highlight/15 bg-panel/60 p-5 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-highlight">Entries</div>
          <div className="text-xs text-text/70">Newest first</div>
        </div>

        <div className="mt-4 max-h-[420px] overflow-auto rounded-xl border border-highlight/10">
          <table className="w-full text-left text-sm">
            <thead className="sticky top-0 bg-panel/80 backdrop-blur">
              <tr className="text-xs uppercase tracking-wide text-text/70">
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">NSID</th>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Amount</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td className="px-3 py-6 text-center text-text/70" colSpan={5}>
                    No entries yet.
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.id} className="border-t border-highlight/10">
                    <td className="px-3 py-2 text-text/85">{r.date}</td>
                    <td className="px-3 py-2 font-mono text-text/85">{r.nsid}</td>
                    <td className="px-3 py-2 text-text/85">
                      {r.firstName} {r.lastName}
                    </td>
                    <td className="px-3 py-2 font-semibold text-highlight">{money(r.amount)}</td>
                    <td className="px-3 py-2 text-right">
                      <button
                        type="button"
                        onClick={() => removeRow(r.id)}
                        className="rounded-md border border-highlight/15 bg-bg/30 px-2 py-1 text-xs text-text/85 hover:border-highlight/35 hover:bg-bg/50"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
