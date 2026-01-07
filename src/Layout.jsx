import { NavLink, Outlet } from "react-router-dom";
import BackgroundLiquidEther from "./components/BackgroundLiquidEther";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg transition ${
    isActive ? "bg-white/15" : "hover:bg-white/10"
  }`;

export default function Layout() {
  return (
    <div className="min-h-screen text-white relative">
      <BackgroundLiquidEther />

      <header className="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <div className="font-semibold">Darian Rowat</div>
          <nav className="flex gap-2">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
