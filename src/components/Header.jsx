export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-highlight/20 bg-panel/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between">
        <div className="font-hacked text-3xl tracking-widest text-highlight sm:text-4xl">
          DARIAN ROWAT
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-2 text-sm">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Contact", "#contact"],
            ["Tracker", "#tracker"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl border border-highlight/15 bg-bg/30 px-3 py-2 text-text/85 hover:border-highlight/35 hover:bg-bg/50"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
