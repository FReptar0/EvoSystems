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
      backgroundColor="transparent"
      className={className}
      friction={0.92}
      lineColor={isHero ? "#2563eb" : "#60a5fa"}
      maxCursorMove={80}
      tension={0.008}
      waveAmpX={isHero ? 45 : 35}
      waveAmpY={isHero ? 20 : 15}
      waveSpeedX={0.008}
      waveSpeedY={0.003}
      xGap={12}
      yGap={isHero ? 40 : 30}
    />
  );
};
