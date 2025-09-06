import React from "react";
import Waves from "../blocks/Backgrounds/Waves/Waves";

interface WaveBackgroundProps {
  variant?: "hero" | "cta";
  className?: string;
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({
  variant = "hero",
  className = "",
}) => {
  const isHero = variant === "hero";
  
  return (
    <Waves
      lineColor={isHero ? "#22c55e" : "#a7f3d0"}
      backgroundColor="transparent"
      waveSpeedX={0.008}
      waveSpeedY={0.003}
      waveAmpX={isHero ? 45 : 35}
      waveAmpY={isHero ? 20 : 15}
      xGap={12}
      yGap={isHero ? 40 : 30}
      friction={0.92}
      tension={0.008}
      maxCursorMove={80}
      className={className}
    />
  );
};
