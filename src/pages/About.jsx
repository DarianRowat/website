import DecryptedText from "../components/DecryptedText";
import TextType from "../components/TextType";

export default function About() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-xl backdrop-blur sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="mt-4 text-white/85">
          This is a quick bio about me, some of my interests, as well as current and prior work experience.
        </p>

        {/* Interests Section */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/80 p-5">
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

          {/* Current Work Section */}
          <div className="rounded-xl border border-white/10 bg-black/80 p-5">
            <div className="text-sm font-semibold">Current Work</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/75">
              <li>
                I am currently working at Cornucopia Honey Ltd. as an apiarist, where I've been working for 10 years.
              </li>
            </ul>
          </div>

          {/* Work History Section */}
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur sm:p-8">
            <div className="mb-6 flex items-center gap-4">
              <h2 className="shrink-0 text-xl font-semibold tracking-tight sm:text-2xl">
                Work History
              </h2>

              <div className="h-px flex-1 bg-gradient-to-r from-highlight/50 via-white/10 to-transparent" />
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-highlight/40 pl-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-white">
                      Apiarist
                    </h3>
                    <p className="text-sm text-highlight/80">
                      Cornucopia Honey Ltd. - Langham, SK
                    </p>
                  </div>

                  <span className="text-sm text-white/50">
                    July 2017 - Present
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Work in a large commercial beekeeping operation managing more than
                  1,500 colonies. Responsibilities include equipment operation and
                  maintenance, hive management, honey extraction, troubleshooting,
                  seasonal crew leadership, and day-to-day agricultural operations.
                </p>
              </div>

              <div className="border-l-2 border-highlight/40 pl-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-white">
                      Freelance 3D Printing & Design
                    </h3>
                    <p className="text-sm text-highlight/80">
                      Independent
                    </p>
                  </div>

                  <span className="text-sm text-white/50">
                    August 2019 - Present
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Design, prototype, and refine custom 3D-printed components using CAD
                  and additive manufacturing, with a focus on practical parts and
                  iterative design.
                </p>
              </div>

              <div className="border-l-2 border-highlight/40 pl-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-white">
                      Laboratory Technician
                    </h3>
                    <p className="text-sm text-highlight/80">
                      Saskatchewan Research Council - Saskatoon, SK
                    </p>
                  </div>

                  <span className="text-sm text-white/50">
                    September 2019 - December 2019
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Operated and maintained laboratory and pilot-scale equipment,
                  processed material samples, assisted with equipment setup and
                  troubleshooting, and followed established safety, quality, and
                  documentation procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
