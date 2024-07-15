import Image from "next/image";
import {FC} from "react";
import {EffectNumber, Parallax} from "react-scroll-parallax";

interface IImageComponent {
  src: string;
  top?: string;
  left?: string;
  right?: string;
  rotate?: string;
  opacity?: EffectNumber;
  width: number;
  height: number;
  flipHorz?: boolean;
  isGlass?: boolean;
  parallaxSpeed?: number;
  zIndexOverride?: number;
}

const ImageComponent: FC<IImageComponent> = ({
  src,
  top,
  left,
  right,
  rotate,
  opacity,
  width,
  height,
  flipHorz,
  isGlass,
  parallaxSpeed,
  zIndexOverride,
}) => {
  const getOpacityValues = (): EffectNumber => {
    if (!opacity) return [1, 1];
    return opacity;
  };
  return (
    <Parallax
      speed={parallaxSpeed || 0}
      opacity={getOpacityValues()}
      rotateY={[flipHorz ? 360 : 0, flipHorz ? 360 : 0]}
      style={{
        position: "absolute",
        left: left || "",
        top: top || "",
        right: right || "",
        rotate: rotate || "0deg",
        overflow: "hidden",
        zIndex: zIndexOverride || 1,
      }}
    >
      <Image
        src={src}
        alt={src}
        quality={100}
        width={width}
        height={height}
        style={{
          position: "relative",
          filter: isGlass ? "blur(5px)" : "",
          clipPath: isGlass ? "circle(50% at center)" : "",
          padding: isGlass ? "15px" : "",
          zIndex: 1,
        }}
      />
    </Parallax>
  );
};

export default ImageComponent;
