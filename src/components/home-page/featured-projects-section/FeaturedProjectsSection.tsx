import styles from "./featured-projects-section.module.css";
import featuredProjects from "@/constants/featured-projects";
import ProjectCard from "./project-card/ProjectCard";
import AnimatedTextComponent from "@/components/common/animated-text/AnimatedTextComponent";
import ImageComponent from "@/components/common/ImageComponent";

const FeatureProjectsSection = () => {
  const layer1ParallaxSpeed = -22;
  const layer2ParallaxSpeed = -10;
  const layer3ParallaxSpeed = -8;

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <AnimatedTextComponent text="Featured Projects" />
      </div>

      <div className={styles.featuredProjectsContainer}>
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            content={project}
            artAsset={project.cardImgAsset}
          />
        ))}
      </div>

      <div id="project-1">
        <ImageComponent
          src="/home-art-5.png"
          width={64}
          height={64}
          top="140vh"
          left="22%"
        />
        <ImageComponent
          src="/home-art-6.png"
          width={32}
          height={32}
          top="162vh"
          left="18%"
          parallaxSpeed={layer3ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-3.png"
          width={45}
          height={45}
          top="148vh"
          left="52%"
          isGlass
          parallaxSpeed={layer1ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-6.png"
          width={80}
          height={80}
          top="148vh"
          right="84px"
          zIndexOverride={2}
        />
        <ImageComponent
          src="/home-art-5.png"
          width={72}
          height={72}
          top="143vh"
          right="42px"
          isGlass
          parallaxSpeed={layer1ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-3.png"
          width={172}
          height={172}
          top="212vh"
          left="-32px"
          isGlass
          parallaxSpeed={layer1ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-5.png"
          width={64}
          height={64}
          top="210vh"
          left="22%"
          isGlass
          parallaxSpeed={layer2ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-6.png"
          width={64}
          height={64}
          top="210vh"
          right="12%"
        />
      </div>

      <div id="project-2">
        <ImageComponent
          src="/home-art-2.png"
          width={747}
          height={629}
          top="220vh"
          right="0%"
          opacity={[0.6, 0.3]}
          parallaxSpeed={layer1ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-5.png"
          width={84}
          height={84}
          top="260vh"
          left="5%"
          isGlass
          parallaxSpeed={layer2ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-3.png"
          width={54}
          height={54}
          top="213vh"
          left="50%"
          isGlass
          parallaxSpeed={layer2ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-6.png"
          width={94}
          height={94}
          top="225vh"
          left="40%"
        />
        <ImageComponent
          src="/home-art-3.png"
          width={84}
          height={84}
          top="288vh"
          right="19%"
          isGlass
          parallaxSpeed={layer2ParallaxSpeed}
        />
      </div>

      <div id="project-3">
        <ImageComponent
          src="/home-art-4.svg"
          width={141}
          height={108}
          top="295vh"
          right="40%"
          flipHorz
          rotate="300deg"
        />
        <ImageComponent
          src="/home-art-3.png"
          width={53}
          height={53}
          top="297vh"
          left="40%"
          isGlass
          parallaxSpeed={layer1ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-5.png"
          width={124}
          height={124}
          top="297vh"
          right="30%"
          isGlass
          parallaxSpeed={layer1ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-6.png"
          width={79}
          height={79}
          top="333vh"
          left="7%"
          zIndexOverride={2}
        />
        <ImageComponent
          src="/home-art-5.png"
          width={69}
          height={69}
          top="327vh"
          left="8%"
          isGlass
          parallaxSpeed={layer1ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-5.png"
          width={64}
          height={64}
          top="308vh"
          right="9%"
          isGlass
          parallaxSpeed={layer1ParallaxSpeed}
        />
        <ImageComponent
          src="/home-art-4.svg"
          width={326}
          height={258}
          top="335vh"
          right="0%"
        />
        <ImageComponent
          src="/home-art-3.png"
          width={124}
          height={124}
          top="338vh"
          right="0%"
        />
        <ImageComponent
          src="/home-art-7.png"
          width={938}
          height={890}
          top="338vh"
          left="-430px"
          parallaxSpeed={layer1ParallaxSpeed}
        />
      </div>
    </div>
  );
};

export default FeatureProjectsSection;
