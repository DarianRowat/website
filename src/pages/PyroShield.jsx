import { Link } from "react-router-dom";

export default function PyroShield() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-xl backdrop-blur sm:p-8">
        <Link
          to="/projects"
          className="text-sm text-white/60 transition hover:text-highlight"
        >
          ← Back to Projects
        </Link>

        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
          PyroShield
        </h1>

        <div className="mt-8 border-t border-white/10 pt-8">
          {/* Build the PyroShield project page here */}
        </div>
      </div>
    </section>
  );
}