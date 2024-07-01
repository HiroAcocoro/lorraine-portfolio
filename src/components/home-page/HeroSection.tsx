import styles from "./hero-section.module.css";
import Image from "next/image";
import {landingPage} from "@/constants";
import ImageComponent from "../common/ImageComponent";

const HeroSection = () => {
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroMessage}>
          <b>{landingPage.hero.title}</b>
          <p>{landingPage.hero.content}</p>
        </div>
        <Image
          src="/hero-art-1.png"
          alt="hero-art-1"
          quality={100}
          width={797}
          height={481}
        />
      </div>
      <ImageComponent
        src="/home-art-1.png"
        width={971}
        height={722}
        top="30%"
        left="-400px"
      />
      <ImageComponent
        src="/home-art-1.png"
        width={971}
        height={722}
        left="20%"
        top="-590px"
        rotate="204deg"
        opacity={0.3}
      />
      <ImageComponent
        src="/home-art-1.png"
        width={1147}
        height={979}
        top="0%"
        right="-15%"
        rotate="3deg"
        opacity={0.3}
        flipHorz
      />
    </div>
  );
};

export default HeroSection;
