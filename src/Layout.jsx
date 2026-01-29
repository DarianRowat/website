import { NavLink, Outlet } from "react-router-dom";
import BackgroundLiquidEther from "./components/BackgroundLiquidEther";
import BackgroundColorBends from "./components/BackgroundColorBends";


const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-xl text-sm transition border ${
    isActive ? "bg-white/15 border-white/15" : "border-transparent hover:bg-white/10"
  }`;

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-white relative">
      <BackgroundLiquidEther />

      {/* Header/Nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-tight">Darian Rowat</div>

          <nav className="flex gap-2">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* Page */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-white/70">
          © {new Date().getFullYear()} Darian Rowat
        </div>
      </footer>
    </div>
  );
}
