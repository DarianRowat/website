import { useEffect, useMemo, useState } from "react";
//import Masonry from "../components/Masonry";

const gallerySections = [
  {
    id: "engineering",
    title: "Engineering",
    //subtitle: "Projects & Milestones",
    items: [
      {
        id: "engineering-1",
        img: "/assets/gallery/hardhatceremony.jpg",
        height: 900,
      },
      {
        id: "engineering-2",
        img: "/assets/gallery/Capstone_Demo_Complete.jpg",
        height: 900,
      },
      {
        id: "engineering-3",
        img: "/assets/gallery/IronRingCeremony.jpg",
        height: 900,
      },
      {
        id: "engineering-4",
        img: "/assets/gallery/GradPic1.jpg",
        height: 900,
      },
      {
        id: "engineering-5",
        img: "/assets/gallery/GradPic2.jpg",
        height: 900,
      },
      {
        id: "engineering-6",
        img: "/assets/gallery/GradPic3.jpg",
        height: 900,
      },
    ],
  },
  {
    id: "beekeeping",
    title: "Beekeeping",
    //subtitle: "Work in the Field",
    items: [
      {
        id: "beekeeping-1",
        img: "/assets/gallery/onthatgrind.jpg",
        height: 700,
      },
      {
        id: "beekeeping-2",
        img: "/assets/gallery/teamonthatgrind.jpg",
        height: 800,
      },
      {
        id: "beekeeping-3",
        img: "/assets/gallery/Work_Bee.jpg",
        height: 800,
      },
      {
        id: "beekeeping-4",
        img: "/assets/gallery/Work_Brood_Frame.jpg",
        height: 800,
      },
      {
        id: "beekeeping-5",
        img: "/assets/gallery/Work_Hives.jpg",
        height: 800,
      },
      {
        id: "beekeeping-6",
        img: "/assets/gallery/Work_Extraction_Room.jpg",
        height: 800,
      },
      {
        id: "beekeeping-7",
        img: "/assets/gallery/Work_Loaded_Truck.jpg",
        height: 800,
      },
      {
        id: "beekeeping-8",
        img: "/assets/gallery/Work_Crop_Duster.jpg",
        height: 800,
      },
      {
        id: "beekeeping-9",
        img: "/assets/gallery/Work_Open_Hives.jpg",
        height: 800,
      },
      {
        id: "beekeeping-10",
        img: "/assets/gallery/Work_Swarm.jpg",
        height: 800,
      },
      {
        id: "beekeeping-11",
        img: "/assets/gallery/Work_Swarm_Catch.jpg",
        height: 800,
      },
      {
        id: "beekeeping-12",
        img: "/assets/gallery/Me_Canola.jpg",
        height: 800,
      },
      {
        id: "beekeeping-13",
        img: "/assets/gallery/Me_Field_Crew.jpg",
        height: 800,
      },
      {
        id: "beekeeping-14",
        img: "/assets/gallery/Swarm_Hand.jpg",
        height: 800,
      },
      {
        id: "beekeeping-15",
        img: "/assets/gallery/3ton_Loaded_Harvest.jpg",
        height: 800,
      },
    ],
  },
  {
    id: "travel",
    title: "Travel & Outdoors",
    //subtitle: "Outside the Office",
    items: [
      {
        id: "travel-1",
        img: "/assets/gallery/bctrip.jpg",
        height: 800,
      },
      {
        id: "travel-2",
        img: "/assets/gallery/bctrip2.jpg",
        height: 800,
      },
      {
        id: "travel-3",
        img: "/assets/gallery/Mexico_Chichen_Itza.jpg",
        height: 800,
      },
      {
        id: "travel-4",
        img: "/assets/gallery/Mexico_Attire.jpg",
        height: 800,
      },
      {
        id: "travel-5",
        img: "/assets/gallery/Mexico_Waterfall.jpg",
        height: 800,
      },
      {
        id: "travel-6",
        img: "/assets/gallery/Mexico_Parrot.jpg",
        height: 800,
      },
    ],
  },
];

function GallerySectionHeader({ title, subtitle }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight/70">
            {subtitle}
          </p>

          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {title}
          </h3>
        </div>

        <div className="h-px flex-1 bg-gradient-to-r from-highlight/50 via-white/10 to-transparent" />
      </div>
    </div>
  );
}

export default function Gallery() {
  const items = useMemo(
    () => gallerySections.flatMap((section) => section.items),
    []
  );

  const [activeId, setActiveId] = useState(null);

  const activeIndex = useMemo(
    () => (activeId ? items.findIndex((item) => item.id === activeId) : -1),
    [activeId, items]
  );

  const active = activeIndex >= 0 ? items[activeIndex] : null;


  useEffect(() => {
    function onKeyDown(e) {
      if (!active) return;

      if (e.key === "Escape") {
        setActiveId(null);
      }

      if (e.key === "ArrowRight") {
        setActiveId(items[(activeIndex + 1) % items.length].id);
      }

      if (e.key === "ArrowLeft") {
        setActiveId(
          items[(activeIndex - 1 + items.length) % items.length].id
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, activeIndex, items]);

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-xl backdrop-blur sm:p-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Gallery
        </h2>

        <div className="mt-8 space-y-12">
          {gallerySections.map((section) => (
            <div key={section.id}>
              <GallerySectionHeader
                title={section.title}
                subtitle={section.subtitle}
              />

              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-highlight/40 hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="block h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                    />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onMouseDown={() => setActiveId(null)}
        >
          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="text-sm text-white/70">
                {activeIndex + 1} / {items.length}
              </div>

              <div className="flex gap-2">
                <button
                  className="rounded-lg bg-white/10 px-3 py-1 text-sm transition hover:bg-white/20"
                  onClick={() =>
                    setActiveId(
                      items[
                        (activeIndex - 1 + items.length) % items.length
                      ].id
                    )
                  }
                >
                  Prev
                </button>

                <button
                  className="rounded-lg bg-white/10 px-3 py-1 text-sm transition hover:bg-white/20"
                  onClick={() =>
                    setActiveId(
                      items[(activeIndex + 1) % items.length].id
                    )
                  }
                >
                  Next
                </button>

                <button
                  className="rounded-lg bg-white/10 px-3 py-1 text-sm transition hover:bg-white/20"
                  onClick={() => setActiveId(null)}
                >
                  Close
                </button>
              </div>
            </div>

            <img
              src={active.img}
              alt=""
              className="max-h-[80vh] w-full bg-black object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}