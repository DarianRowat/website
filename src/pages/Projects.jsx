import FlowingMenu from "../components/FlowingMenu"; // <-- adjust path if needed
import { Link } from "react-router-dom";

export default function Projects() {
  const items = [
    {
      link: "https://github.com/darianrowat", // change to your project link
      text: "Capstone Project: PyroShield",
      image: "/assets/projects/UnderConstruction.png", // put image in public/assets/projects/
    },
    {
      link: "https://github.com/darianrowat", // change to your project link
      text: "IoT Smart Parking",
      image: "/assets/projects/UnderConstruction.png", // put image in public/assets/projects/
    },
    {
      link: "https://github.com/darianrowat",
      text: "FPGA Hardware Verification",
      image: "/assets/projects/UnderConstruction.png",
    },
    {
      link: "https://github.com/darianrowat",
      text: "IoT Systems (Future)",
      image: "/assets/projects/UnderConstruction.png",
    },
  ];

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:p-8">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mt-3 text-white/85">
          Some of the projects I've worked on:
        </p>

        {/* Flowing Menu */}
        <div className="mt-6 relative h-[500px] overflow-hidden rounded-2xl border border-white/10">
          <FlowingMenu
            items={items}
            speed={15}
            textColor="#ffffff"
            bgColor="rgba(0,0,0,0.4)"        
            marqueeBgColor="#ffffff"
            marqueeTextColor="#060010"
            borderColor="rgba(255,255,255,0.25)"
          />
        </div>

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