import { useEffect, useState } from "react";

const images = [
  {
    src: "/assets/projects/PyroShield/Full_System_View.png",
    alt: "Complete PyroShield system",
  },
  {
    src: "/assets/projects/PyroShield/Pyroshield_Full_Logo.png",
    alt: "PyroShield full logo",
  },
  {
    src: "/assets/projects/PyroShield/Full_System_Transparent.png",
    alt: "Transparent view of the PyroShield system",
  },
  {
    src: "/assets/projects/PyroShield/Midplate_Assembly.png",
    alt: "PyroShield midplate electronics assembly",
  },
  {
    src: "/assets/projects/PyroShield/Outer_Shell.png",
    alt: "PyroShield outer shell",
  },
  {
    src: "/assets/projects/PyroShield/Roof.png",
    alt: "PyroShield enclosure roof",
  },
  {
    src: "/assets/projects/PyroShield/Top_View.png",
    alt: "Top view of the PyroShield electronics",
  },
  {
    src: "/assets/projects/PyroShield/Bottom_View.png",
    alt: "Bottom battery compartment view",
  },
  {
    src: "/assets/projects/PyroShield/Bottom.png",
    alt: "PyroShield lower enclosure",
  },
  {
    src: "/assets/projects/PyroShield/Enclosure_No_Shell.png",
    alt: "PyroShield electronics without outer shell",
  },
  {
    src: "/assets/projects/PyroShield/Full_System_Back.png",
    alt: "Rear view of the complete PyroShield system",
  },
  {
    src: "/assets/projects/PyroShield/Full_System_Front.png",
    alt: "Front view of the complete PyroShield system",
  },
];

export default function PyroShield() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-xl backdrop-blur sm:p-8">
        {/* Hero */}
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-black/80 p-6 md:grid-cols-2 md:items-center sm:p-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="max-h-[260px] w-full max-w-md object-contain"
            />
          </div>

          {/* Featured System Image */}
          <button
            type="button"
            onClick={() => setActiveImage(images[0])}
            className="group flex items-center justify-center"
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="max-h-[300px] w-full max-w-md object-contain transition duration-300 group-hover:scale-[1.02]"
            />
          </button>
        </div>

        {/* Image section header */}
        <div className="mb-6 mt-10 flex items-center gap-4">
          <h2 className="shrink-0 text-xl font-semibold tracking-tight sm:text-2xl">
            Rendered Images in Fusion 360
          </h2>

          <div className="h-px flex-1 bg-gradient-to-r from-highlight/50 via-white/10 to-transparent" />
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.slice(2).map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(image)}
              className="group flex min-h-[260px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/80 p-3 transition duration-300 hover:border-white/25 hover:bg-white/[0.05]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[360px] w-full object-contain transition duration-300 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Full-size image viewer */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onMouseDown={() => setActiveImage(null)}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-7xl items-center justify-center"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-3 top-3 rounded-lg border border-white/10 bg-black/70 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}