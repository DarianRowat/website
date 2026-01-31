import DecryptedText from "../components/DecryptedText";
import TextType from "../components/TextType";

export default function Home() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <img
            src="/assets/ShirtnTie.jpg"
            alt="Young me"
            className="w-40 shrink-0 rounded-xl border-2 border-white/20 shadow-lg"
          />

          <div className="text-center sm:text-left">
            <TextType text="Hello, I'm Darian. Welcome to my website!"
                    className="text-3xl font-bold tracking-tight"
                    encryptedClassName="text-3xl font-bold tracking-tight text-white/60"
                    loop={false}/>
            <p className="mt-3 text-lg text-white/85">Here you can get to know me a little better.</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="/about"
                className="rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-white/25 hover:bg-black/30"
              >
                <div className="text-sm font-semibold">About</div>
                <div className="mt-1 text-sm text-white/75">
                  Computer Engineering with Software Engineering and Digital Systems focuses at University of Saskatchewan.
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Graduating April 2026.
                </div>
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-white/25 hover:bg-black/30"
              >
                <div className="text-sm font-semibold">Contact</div>
                <div className="mt-1 text-sm text-white/75">Come get in touch!</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
          <div className="text-sm font-semibold">Focus</div>
          <p className="mt-2 text-sm text-white/75">
            Big fan of embedded systems, hardware verification, and telecommunications.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
          <div className="text-sm font-semibold">Current</div>
          <p className="mt-2 text-sm text-white/75">In my final semester I am learning about software analysis, design of advanced digital systems,
          ethics in engineering, as well as my capstone project.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
          <div className="text-sm font-semibold">Tools</div>
          <p className="mt-2 text-sm text-white/75">
            <li>SystemVerilog, UVM</li>
            <li>C, Python, Bash, JS, many other languages</li>
            <li>Word, PowerPoint, Excel, etc.</li>
            <li>React/Node</li>
            <li>Fusion 360</li>
            <li>Synopsys</li>
            <li>Raspberry Pi, Arduino</li>
          </p>
        </div>
      </div>
    </section>
  );
}
