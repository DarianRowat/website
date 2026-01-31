import DecryptedText from "../components/DecryptedText";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-4 text-white/85">{/* Intro text about contacting me */}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold">Direct</div>
            <div className="mt-3 space-y-2 text-sm text-white/75">
              <p>
                
                <a
                  href="mailto:darianrowat@gmail.com"
                  className="inline-flex items-center gap-2 underline decoration-white/30 hover:decoration-white"
                >
                  <MdEmail className="text-xl" aria-hidden="true" />
                  <span>DarianRowat@gmail.com</span>
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/darianrowat"
                  className="inline-flex items-center gap-2 underline decoration-white/30 hover:decoration-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-xl" aria-hidden="true" />
                  <span>DarianRowat</span>
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/darianrowat/"
                  className="inline-flex items-center gap-2 underline decoration-white/30 hover:decoration-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-xl" aria-hidden="true" />
                  <span>LinkedIn</span>
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
              placeholder="Your name"
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
