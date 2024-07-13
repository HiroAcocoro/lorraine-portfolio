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
          <Image
            src="/hero-art-1.png"
            alt="hero-art-1"
            quality={100}
            width={797}
            height={481}
            style={{position: "relative", zIndex: 999}}
          />
        </div>
      </div>
      <ImageComponent
        src="/home-art-1.png"
        width={971}
        height={722}
        top="30%"
        left="-400px"
        parallaxSpeed={layer1ParallaxSpeed}
      />
      <ImageComponent
        src="/home-art-1.png"
        width={971}
        height={722}
        left="20%"
        top="-440px"
        rotate="204deg"
        opacity={[0.2, 0.4]}
        parallaxSpeed={layer1ParallaxSpeed}
      />
      <ImageComponent
        src="/home-art-2.png"
        width={747}
        height={629}
        top="20%"
        right="0%"
        opacity={[0.2, 0.4]}
        parallaxSpeed={layer1ParallaxSpeed}
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
          src="/home-art-4.svg"
          width={363}
          height={258}
          top="69%"
          left="-20px"
        />
        <ImageComponent
          src="/home-art-3.png"
          width={38}
          height={38}
          top="82%"
          left="250px"
        />
      </div>
      <ImageComponent
        src="/home-art-5.png"
        width={49}
        height={49}
        top="18%"
        left="160px"
      />
      <ImageComponent
        src="/home-art-3.png"
        width={165}
        height={165}
        top="1%"
        left="18%"
        isGlass
        parallaxSpeed={layer2ParallaxSpeed}
      />
      <ImageComponent
        src="/home-art-5.png"
        width={135}
        height={135}
        top="13%"
        left="40%"
        isGlass
        parallaxSpeed={layer2ParallaxSpeed}
      />
      <div>
        <ImageComponent
          src="/home-art-5.png"
          width={120}
          height={120}
          rotate="310deg"
          top="3%"
          right="290px"
          isGlass
          parallaxSpeed={layer2ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-4.svg"
          width={201}
          height={158}
          rotate="310deg"
          top="170px"
          right="200px"
        />
        <ImageComponent
          src="/home-art-3.png"
          width={211}
          height={205}
          top="10%"
          right="140px"
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
