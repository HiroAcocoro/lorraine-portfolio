import ClayButton from "@/components/common/clay-button/ClayButton";
import styles from "../featured-projects-section.module.css";
import {FC, useCallback, useEffect, useRef, useState} from "react";
import Image from "next/image";

interface IProjectCard {
  content: {
    title: string;
    logo: {
      logoSrc: string;
      logoW: number;
      logoH: number;
    };
    imgSrc: string;
    className: string;
    content: string;
    link: string;
    gradientBgColor: string;
    boxShadow: string;
    isReversed: boolean;
  };
  artAsset: {
    src: string;
    w: number;
    h: number;
    alt: string;
    top: string;
    left: string;
    animation: string;
    isGlitched: boolean;
    glitchedImages?: string[];
  };
}

const ProjectCard: FC<IProjectCard> = ({content, artAsset}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [glitchedImgSrc, setGlitchedImgSrc] = useState<number>(0);

  const getRandomNumber = () => Math.floor(Math.random() * 3) + 1;
  const getRandomInterval = () => Math.floor(Math.random() * 3000) + 1000;

  const updateRandomNumber = useCallback(() => {
    const newRandomNumber = getRandomNumber();
    setGlitchedImgSrc(newRandomNumber);
    setTimeout(() => setGlitchedImgSrc(0), 500);
    const randomInterval = getRandomInterval();
    setTimeout(updateRandomNumber, randomInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (artAsset.isGlitched && inView) {
      const randomInterval = getRandomInterval();
      const timer = setTimeout(updateRandomNumber, randomInterval);
      return () => clearTimeout(timer);
    }
  }, [artAsset.isGlitched, inView, updateRandomNumber]);

  return (
    <div className={styles.projectContainer}>
      <div
        className={`${styles.projectCardImgArtContainer} ${
          inView ? styles[artAsset.animation] : styles.hidden
        }`}
      >
        <Image
          src={artAsset.src}
          width={artAsset.w}
          height={artAsset.h}
          quality={100}
          alt={artAsset.alt}
          priority
          style={{
            position: "absolute",
            top: artAsset.top,
            left: content.isReversed ? "" : artAsset.left,
            right: content.isReversed ? artAsset.left : "",
            zIndex: 20,
            visibility:
              artAsset.isGlitched && glitchedImgSrc !== 0
                ? "hidden"
                : "visible",
          }}
        />
        {artAsset.isGlitched &&
          artAsset.glitchedImages?.length &&
          artAsset.glitchedImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              width={artAsset.w}
              height={artAsset.h}
              quality={100}
              alt={artAsset.alt}
              priority
              style={{
                position: "absolute",
                top: artAsset.top,
                left: content.isReversed ? "" : artAsset.left,
                right: content.isReversed ? artAsset.left : "",
                zIndex: 20,
                visibility: glitchedImgSrc === index + 1 ? "visible" : "hidden",
              }}
            />
          ))}
      </div>

      <div
        ref={ref}
        className={styles.projectCard}
        style={{flexDirection: content.isReversed ? "row-reverse" : "row"}}
      >
        <div className={styles.projectInfo}>
          <div className={styles.projectCardHeader}>
            <Image
              src={content.logo.logoSrc}
              width={content.logo.logoW}
              height={content.logo.logoH}
              alt={content.title}
              quality={100}
            />
            <p>{content.title}</p>
          </div>
          <div className={styles.projectCardBody}>
            <p>{content.content}</p>
            <ClayButton
              link={content.link}
              content="View case study"
              bgColor={content.gradientBgColor}
              boxShadow={content.boxShadow}
            />
          </div>
        </div>
        <div
          className={styles.projectCardImgContainer}
          style={{background: content.gradientBgColor}}
        >
          <div
            className={styles[content.className]}
            style={{position: "relative"}}
          >
            <Image
              fill
              src={content.imgSrc}
              alt={content.title}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
