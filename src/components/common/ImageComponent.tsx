import Image from "next/image";
import {CSSProperties, FC} from "react";
import {EffectNumber, Parallax} from "react-scroll-parallax";
import ImageParallax from "./ImageParallax";

interface IImageComponent {
  src: string;
  top?: string;
  left?: string;
  right?: string;
  rotate?: string;
  opacity?: EffectNumber;
  width?: number;
  height?: number;
  isGlass?: boolean;
  parallaxSpeed?: number;
  zIndexOverride?: number;
  fill?: boolean;
  className?: string;
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
  isGlass,
  parallaxSpeed,
  zIndexOverride,
  fill,
  className,
}) => {
  const imgProps = () => {
    if (fill) return {fill: true};
    return {
      position: "relative",
      width,
      height,
    };
  };

  if (fill)
    return (
      <ImageParallax
        top={top}
        left={left}
        right={right}
        rotate={rotate}
        opacity={opacity}
        zIndexOverride={zIndexOverride}
        parallaxSpeed={parallaxSpeed || 0}
      >
        <div className={className} style={{position: "relative"}}>
          <Image
            src={src}
            alt={src}
            quality={100}
            style={{
              filter: isGlass ? "blur(5px)" : "",
              clipPath: isGlass ? "circle(50% at center)" : "",
              padding: isGlass ? "15px" : "",
              zIndex: 1,
            }}
            {...imgProps()}
          />
        </div>
      </ImageParallax>
    );

  return (
    <ImageParallax
      top={top}
      left={left}
      right={right}
      rotate={rotate}
      opacity={opacity}
      zIndexOverride={zIndexOverride}
      parallaxSpeed={parallaxSpeed || 0}
    >
      <Image
        src={src}
        alt={src}
        quality={100}
        style={{
          filter: isGlass ? "blur(5px)" : "",
          clipPath: isGlass ? "circle(50% at center)" : "",
          padding: isGlass ? "15px" : "",
          zIndex: 1,
        }}
        {...imgProps()}
      />
    </ImageParallax>
  );
};

export default ImageComponent;
