import DecryptedText from "../components/DecryptedText";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  function openEmail(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website contact from ${name || "Someone"}`);
    const body = encodeURIComponent(`${msg || ""}\n\n— ${name || ""}`);
    window.location.href = `mailto:darianrowat@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:p-8">
        <DecryptedText text="Contact"
                className="text-3xl font-bold tracking-tight"
                encryptedClassName="text-3xl font-bold tracking-tight text-white/60"/>
        <p className="mt-4 text-white/85">{/* Intro text about contacting me */}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold">Direct</div>
            <div className="mt-3 space-y-2 text-sm text-white/75">
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a className="underline decoration-white/30 hover:decoration-white" href="mailto:darianrowat@gmail.com">
                  darianrowat@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">GitHub:</span>{" "}
                <a className="underline decoration-white/30 hover:decoration-white" href="https://github.com/darianrowat">
                  https://github.com/darianrowat
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">LinkedIn:</span>{" "}
                <a
                  className="underline decoration-white/30 hover:decoration-white"
                  href="https://www.linkedin.com/in/darianrowat/"
                >
                  https://www.linkedin.com/in/darianrowat/
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={openEmail} className="rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold">Message</div>

            <label className="mt-4 block text-sm text-white/70" htmlFor="c_name">
              Name
            </label>
            <input
              id="c_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Darian Rowat"
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25 focus:ring-2 focus:ring-white/15"
            />

            <label className="mt-4 block text-sm text-white/70" htmlFor="c_msg">
              Message
            </label>
            <textarea
              id="c_msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={5}
              placeholder="What can I help with?"
              className="mt-1 w-full resize-y rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25 focus:ring-2 focus:ring-white/15"
            />

            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-white/15 px-4 py-2 text-sm font-semibold shadow transition hover:bg-white/25"
            >
              Open email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
