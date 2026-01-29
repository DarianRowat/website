//import DecryptedText from "../components/DecryptedText";
//import TextType from "../components/TextType";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>

        <p className="mt-4 text-white/85">Sorry — this page is still under construction.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-white/15 px-4 py-2 text-sm font-semibold shadow transition hover:bg-white/25"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
