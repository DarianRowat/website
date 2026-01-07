import BackgroundLiquidEther from "./components/BackgroundLiquidEther";
import Header from "./components/Header";
import Tracker from "./components/Tracker";

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border border-highlight/15 bg-panel/60 p-6 shadow-xl backdrop-blur sm:p-8">
          <h2 className="text-3xl font-bold tracking-tight text-highlight sm:text-4xl">{title}</h2>
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const msg = String(fd.get("message") || "").trim();
    const subject = encodeURIComponent("Website contact from " + (name || "Someone"));
    const body = encodeURIComponent((msg || "") + "\n\n— " + (name || ""));
    window.location.href = "mailto:darianrowat@gmail.com?subject=" + subject + "&body=" + body;
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-highlight/10 bg-bg/40 p-5">
      <div className="text-sm font-semibold text-highlight">Message</div>

      <label className="mt-4 block text-sm text-text/80" htmlFor="c_name">
        Name
      </label>
      <input
        id="c_name"
        name="name"
        type="text"
        placeholder="Darian Rowat"
        className="mt-1 w-full rounded-lg border border-highlight/15 bg-bg/40 px-3 py-2 text-sm text-text placeholder:text-text/40 focus:border-highlight/50 focus:outline-none focus:ring-2 focus:ring-highlight/20"
      />

      <label className="mt-4 block text-sm text-text/80" htmlFor="c_msg">
        Message
      </label>
      <textarea
        id="c_msg"
        name="message"
        rows={5}
        placeholder="What can I help with?"
        className="mt-1 w-full resize-y rounded-lg border border-highlight/15 bg-bg/40 px-3 py-2 text-sm text-text placeholder:text-text/40 focus:border-highlight/50 focus:outline-none focus:ring-2 focus:ring-highlight/20"
      />

      <button
        type="submit"
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-highlight px-4 py-2 text-sm font-semibold text-bg shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-highlight/60 focus:ring-offset-2 focus:ring-offset-bg"
      >
        Open email
      </button>
    </form>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <BackgroundLiquidEther />
      <Header />

      <main className="relative z-10">
        {/* HOME */}
        <section id="home" className="scroll-mt-24">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <div className="rounded-2xl border border-highlight/15 bg-panel/60 p-6 shadow-xl backdrop-blur sm:p-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img
                  src="/assets/ShirtnTie.jpg"
                  alt="Darian Rowat"
                  className="w-40 shrink-0 rounded-xl border-2 border-accent/70 shadow-lg"
                />

                <div className="text-center sm:text-left">
                  <h1 className="text-3xl font-bold tracking-tight text-highlight sm:text-4xl">Hello, World!</h1>
                  <p className="mt-3 text-lg text-text/90">heh heh heh heh</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <a
                      href="#about"
                      className="rounded-xl border border-highlight/15 bg-bg/40 p-4 transition hover:border-highlight/40 hover:bg-bg/60"
                    >
                      <div className="text-sm font-semibold text-highlight">About</div>
                      <div className="mt-1 text-sm text-text/80">
                        I'm a computer engineering student with a focus at University of Saskatchewan. Graduating April
                        2026.
                      </div>
                    </a>

                    <a
                      href="#contact"
                      className="rounded-xl border border-highlight/15 bg-bg/40 p-4 transition hover:border-highlight/40 hover:bg-bg/60"
                    >
                      <div className="text-sm font-semibold text-highlight">Contact</div>
                      <div className="mt-1 text-sm text-text/80">Come get in touch!</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-highlight/10 bg-panel/40 p-5 backdrop-blur">
                <div className="text-sm font-semibold text-highlight">Focus</div>
                <p className="mt-2 text-sm text-text/85">
                  Hardware/software co-design, verification, and full-stack projects.
                </p>
              </div>
              <div className="rounded-2xl border border-highlight/10 bg-panel/40 p-5 backdrop-blur">
                <div className="text-sm font-semibold text-highlight">Current</div>
                <p className="mt-2 text-sm text-text/85">uC/OS-II, UVM, React/Node, and IoT work.</p>
              </div>
              <div className="rounded-2xl border border-highlight/10 bg-panel/40 p-5 backdrop-blur">
                <div className="text-sm font-semibold text-highlight">Tools</div>
                <p className="mt-2 text-sm text-text/85">Here I will include a list of tools I use and am familiar with.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About">
          <p className="text-text/90">
            This is a quick bio about me, my interests, and what I'm currently working on.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-highlight/10 bg-bg/40 p-5">
              <div className="text-sm font-semibold text-highlight">What I'm into</div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                <li>FPGA development &amp; embedded systems</li>
                <li>Hardware verification (UVM, CRV, coverage)</li>
                <li>Full-stack apps (React + Node)</li>
                <li>Beekeeping! This is what I've done for 10 years outside of school.</li>
                <li>Telecommunications</li>
                <li>Ice hockey. My favourite NHL team is the San Jose Sharks.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-highlight/10 bg-bg/40 p-5">
              <div className="text-sm font-semibold text-highlight">What I'm building</div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text/85">
                <li>
                  Current capstone project is an IoT outdoor fire detection edge device / early-warning system utilizing
                  flame/smoke sensors and Raspberry Pi Pico 2W.
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-highlight/10 bg-bg/40 p-5">
              <div className="text-sm font-semibold text-highlight">Direct</div>
              <div className="mt-3 space-y-2 text-sm text-text/85">
                <p>
                  <span className="font-semibold text-text">Email:</span>{" "}
                  <a className="text-highlight hover:underline" href="mailto:darianrowat@gmail.com">
                    darianrowat@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-text">LinkedIn:</span>{" "}
                  <span className="text-text/70">(add link)</span>
                </p>
                <p>
                  <span className="font-semibold text-text">GitHub:</span> <span className="text-text/70">(add link)</span>
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Section>

        {/* TRACKER */}
        <Section id="tracker" title="Tracker">
          <Tracker />
        </Section>

        <footer className="pb-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-2xl border border-highlight/10 bg-panel/40 p-5 text-center text-sm text-text/70 backdrop-blur">
              <div className="font-hacked tracking-widest text-highlight/90">DARIAN ROWAT</div>
              <div className="mt-2">Built with React + Tailwind. Background: Liquid Ether (ReactBits).</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
