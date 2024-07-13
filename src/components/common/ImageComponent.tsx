import Image from "next/image";
import {FC} from "react";

interface IImageComponent {
  src: string;
  top?: string;
  left?: string;
  right?: string;
  rotate?: string;
  opacity?: number;
  width: number;
  height: number;
  flipHorz?: boolean;
  isGlass?: boolean;
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
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: left || "",
        top: top || "",
        right: right || "",
        rotate: rotate || "0deg",
        opacity: opacity || 1,
        transform: flipHorz ? "scaleX(-1)" : "",
        overflow: "hidden",
      }}
    >
      <Image
        src={src}
        alt={src}
        quality={100}
        width={width}
        height={height}
        style={{
          filter: isGlass ? "blur(5px)" : "",
          clipPath: isGlass ? "circle(50% at center)" : "",
          padding: isGlass ? "15px" : "",
        }}
      />
    </div>
  );
};

export default ImageComponent;
