import React, {FC, ReactElement} from "react";
import {EffectNumber, Parallax} from "react-scroll-parallax";

interface IImageParallaxProps {
  children: ReactElement;
  opacity?: EffectNumber;
  top?: string;
  left?: string;
  right?: string;
  rotate?: string;
  parallaxSpeed: number;
  zIndexOverride?: number;
}

const ImageParallax: FC<IImageParallaxProps> = ({
  children,
  opacity,
  top,
  left,
  right,
  rotate,
  parallaxSpeed,
  zIndexOverride,
}) => {
  const getOpacityValues = (): EffectNumber => {
    if (!opacity) return [1, 1];
    return opacity;
  };

  return (
    <Parallax
      speed={parallaxSpeed}
      opacity={getOpacityValues()}
      style={{
        position: "absolute",
        left: left || "",
        top: top || "",
        right: right || "",
        rotate: rotate || "0deg",
        overflow: "visible",
        zIndex: zIndexOverride || 1,
      }}
    >
      {children}
    </Parallax>
  );
};

export default ImageParallax;
