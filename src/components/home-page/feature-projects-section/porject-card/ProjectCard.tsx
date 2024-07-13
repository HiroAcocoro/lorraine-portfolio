import ClayButton from "@/components/common/clay-button/ClayButton";
import styles from "../featured-projects-section.module.css";
import {FC} from "react";
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
}

const ProjectCard: FC<IProjectCard> = ({content}) => {
  return (
    <div
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
  );
};

export default ProjectCard;
