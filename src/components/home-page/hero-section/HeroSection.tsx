import styles from "./hero-section.module.css";
import Image from "next/image";
import {landingPage} from "@/constants";
import ImageComponent from "../../common/ImageComponent";

const HeroSection = () => {
  const layer1ParallaxSpeed = -25;
  const layer2ParallaxSpeed = -10;
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroMessage}>
          <b>{landingPage.hero.title}</b>
          <p>{landingPage.hero.content}</p>
        </div>
        <div className="animated-component">
          <div className={styles.heroArtContainer}>
            <Image
              src="/hero-art-1.png"
              alt="hero-art-1"
              quality={100}
              fill={true}
              style={{zIndex: 999}}
            />
          </div>
        </div>
      </div>
      <ImageComponent
        fill
        src="/home-art-1.png"
        top="25%"
        left="-400px"
        opacity={[0.3, 0.2]}
        parallaxSpeed={layer1ParallaxSpeed}
        className={styles.artContainerLg3}
      />
      <ImageComponent
        fill
        src="/home-art-1.png"
        left="20%"
        top="-440px"
        rotate="176deg"
        opacity={[0.4, 0.2]}
        className={styles.artContainerLg1}
      />
      <ImageComponent
        fill
        src="/home-art-2.png"
        top="20%"
        right="0%"
        opacity={[0.3, 0.2]}
        parallaxSpeed={layer1ParallaxSpeed}
        className={styles.artContainerLg2}
      />
      <div>
        <ImageComponent
          src="/home-art-3.png"
          width={165}
          height={165}
          top="70%"
          left="110px"
          isGlass
          parallaxSpeed={layer2ParallaxSpeed}
        />
        <ImageComponent
          fill
          src="/home-art-4.svg"
          top="69%"
          left="-20px"
          className={styles.artContainer7}
        />
        <ImageComponent
          fill
          src="/home-art-3.png"
          top="82%"
          left="250px"
          className={styles.artContainer8}
        />
      </div>
      <ImageComponent
        fill
        src="/home-art-5.png"
        top="18%"
        left="160px"
        className={styles.artContainer6}
      />
      <ImageComponent
        fill
        src="/home-art-3.png"
        top="1%"
        left="18%"
        isGlass
        parallaxSpeed={layer2ParallaxSpeed}
        className={styles.artContainer5}
      />
      <ImageComponent
        fill
        src="/home-art-5.png"
        top="13%"
        left="40%"
        isGlass
        parallaxSpeed={layer2ParallaxSpeed}
        className={styles.artContainer4}
      />
      <div>
        <ImageComponent
          fill
          src="/home-art-5.png"
          top="3%"
          right="330px"
          isGlass
          parallaxSpeed={layer2ParallaxSpeed}
          className={styles.artContainer3}
        />
        <ImageComponent
          fill
          src="/home-art-4.svg"
          rotate="310deg"
          top="170px"
          right="200px"
          className={styles.artContainer2}
        />
        <ImageComponent
          fill
          src="/home-art-3.png"
          top="10%"
          right="140px"
          className={styles.artContainer1}
        />
      </div>
      <ImageComponent
        src="/home-art-3.png"
        width={125}
        height={125}
        top="80%"
        right="10%"
        isGlass
        parallaxSpeed={layer2ParallaxSpeed}
      />
    </div>
  );
};

export default HeroSection;
