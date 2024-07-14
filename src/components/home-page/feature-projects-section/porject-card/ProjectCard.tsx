import ClayButton from "@/components/common/clay-button/ClayButton";
import styles from "../featured-projects-section.module.css";
import {FC, useEffect, useRef, useState} from "react";
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
    content: string;
    link: string;
    gradientBgColor: string;
    boxShadow: string;
    reversed: boolean;
  };
  artAsset: {
    src: string;
    w: number;
    h: number;
    alt: string;
    top: string;
    left: string;
    animation: string;
  };
}

const ProjectCard: FC<IProjectCard> = ({content, artAsset}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

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
          style={{
            position: "absolute",
            top: artAsset.top,
            left: content.reversed ? "" : artAsset.left,
            right: content.reversed ? artAsset.left : "",
            zIndex: 20,
          }}
        />
      </div>

      <div
        ref={ref}
        className={styles.projectCard}
        style={{flexDirection: content.reversed ? "row-reverse" : "row"}}
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
          <Image
            src={content.imgSrc}
            width={489}
            height={422}
            alt={content.title}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
