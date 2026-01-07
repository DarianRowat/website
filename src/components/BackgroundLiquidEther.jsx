import LiquidEther from "./LiquidEther";

export default function BackgroundLiquidEther() {
  return (
    <div className="fixed inset-0 -z-10">
      <LiquidEther
        className="w-full h-full"
        colors={["#e90707", "#f51450", "#f9f110"]}
        mouseForce={30}
        cursorSize={105}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.4}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />

      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
