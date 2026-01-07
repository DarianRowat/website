import DecryptedText from "../components/DecryptedText";

export default function About() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:p-8">
        <DecryptedText text="About" />
        <p className="mt-4 text-white/85">
          This is a quick bio about me, my interests, and what I'm currently working on.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold">What I'm into</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/75">
              <li>FPGA development & embedded systems</li>
              <li>Hardware verification (UVM, CRV, coverage)</li>
              <li>Full-stack apps (React + Node)</li>
              <li>Beekeeping! This is what I've done for 10 years outside of school.</li>
              <li>Telecommunications</li>
              <li>Ice hockey. My favourite NHL team is the San Jose Sharks.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="text-sm font-semibold">What I'm building</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/75">
              <li>
                Current capstone project is an IoT outdoor fire-detection system utilizing flame/smoke sensors and
                Raspberry Pi Pico 2W
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
