import { useEffect, useMemo, useState } from "react";
import Masonry from "../components/Masonry";

export default function Gallery() {
  const items = useMemo(
    () => [
      { id: "1", img: "/assets/gallery/hardhatceremony.jpg", height: 900 },
      { id: "2", img: "/assets/gallery/onthatgrind.jpg", height: 700 },
      { id: "3", img: "/assets/gallery/teamonthatgrind.jpg", height: 800 },
      { id: "4", img: "/assets/gallery/bctrip.jpg", height: 800 },
      { id: "5", img: "/assets/gallery/bctrip2.jpg", height: 800 },
      // add more...
    ],
    []
  );

  const [activeId, setActiveId] = useState(null);

  const activeIndex = useMemo(
    () => (activeId ? items.findIndex((i) => i.id === activeId) : -1),
    [activeId, items]
  );

  const active = activeIndex >= 0 ? items[activeIndex] : null;

  // ESC + arrow keys
  useEffect(() => {
    function onKeyDown(e) {
      if (!active) return;
      if (e.key === "Escape") setActiveId(null);
      if (e.key === "ArrowRight") setActiveId(items[(activeIndex + 1) % items.length].id);
      if (e.key === "ArrowLeft") setActiveId(items[(activeIndex - 1 + items.length) % items.length].id);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, activeIndex, items]);

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur sm:p-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Gallery</h2>

        <div className="mt-6">
          <Masonry
            items={items}
            animateFrom="bottom"
            duration={0.6}
            stagger={0.05}
            scaleOnHover
            hoverScale={0.98}
            blurToFocus
            colorShiftOnHover={false}
            onItemClick={(item) => setActiveId(item.id)} // ✅ open lightbox
          />
        </div>
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 p-4 flex items-center justify-center"
          onMouseDown={() => setActiveId(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="text-sm text-white/70">
                {activeIndex + 1} / {items.length}
              </div>

              <div className="flex gap-2">
                <button
                  className="rounded-lg px-3 py-1 text-sm bg-white/10 hover:bg-white/20 transition"
                  onClick={() => setActiveId(items[(activeIndex - 1 + items.length) % items.length].id)}
                >
                  Prev
                </button>
                <button
                  className="rounded-lg px-3 py-1 text-sm bg-white/10 hover:bg-white/20 transition"
                  onClick={() => setActiveId(items[(activeIndex + 1) % items.length].id)}
                >
                  Next
                </button>
                <button
                  className="rounded-lg px-3 py-1 text-sm bg-white/10 hover:bg-white/20 transition"
                  onClick={() => setActiveId(null)}
                >
                  Close
                </button>
              </div>
            </div>

            <img
              src={active.img}
              alt=""
              className="w-full max-h-[80vh] object-contain bg-black"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
