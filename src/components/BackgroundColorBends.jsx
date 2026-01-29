import ColorBends from "./ColorBends";

export default function BackgroundColorBends() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <ColorBends
        rotation={0}
        speed={0.15}
        colors={["#ff0000", "#00ff00", "#0000ff"]}
        transparent
        autoRotate={0}
        scale={1}
        frequency={1.1}
        warpStrength={1}
        mouseInfluence={0}
        parallax={0}
        noise={0}
      />
      {/* optional readability overlay */}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}
