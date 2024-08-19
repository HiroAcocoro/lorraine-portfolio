import Image from "next/image";
import {Luckiest_Guy} from "next/font/google";
import baseStyles from "../case-studies.module.css";
import styles from "./page.module.css";
import caseStudy from "@/constants/prepfolio-case-studies";
import Section from "@/components/case-studies/Section";
import ImgSlider from "@/components/img-slider/ImgSlider";

const luckiest_guy = Luckiest_Guy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const imgSrcSlides = [
  "/prepfolio-img-slide-1.png",
  "/prepfolio-img-slide-2.png",
  "/prepfolio-img-slide-3.png",
  "/prepfolio-img-slide-4.png",
  "/prepfolio-img-slide-5.png",
  "/prepfolio-img-slide-6.png",
  "/prepfolio-img-slide-7.png",
  "/prepfolio-img-slide-8.png",
  "/prepfolio-img-slide-9.png",
  "/prepfolio-img-slide-10.png",
  "/prepfolio-img-slide-11.png",
];

const prepfolioCaseStudy = () => {
  return (
    <div className={baseStyles.main}>
      <div className={baseStyles.heroBg}>
        <Image
          src="/prepfolio-bg-1.png"
          alt="background-image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={baseStyles.heroSection}>
        <div className={baseStyles.heroCard}>
          <div className={baseStyles.cardHeader}>
            <Image
              src="/prepfolio-logo.png"
              width={109}
              height={106}
              alt="mma-logo"
            />
            <p
              className={luckiest_guy.className}
              style={{
                textTransform: "uppercase",
                fontSize: "64px",
                marginLeft: "1rem",
              }}
            >
              prepfolio
            </p>
          </div>
          <p className={styles.caseStudySubHeader}>
            Simplifying Meal Prep, One Recipe at a Time
          </p>
          <div className={baseStyles.cardBody}>
            Prepfolio is a mobile application designed to simplify meal planning
            and grocery shopping. It auto-generates personalized meal plans
            based on user preferences, dietary restrictions, and creates an
            automated grocery list.
          </div>
        </div>
        <div className={baseStyles.spacer} />
        <div className="animated-component">
          <Image
            src="/prepfolio-art-1.png"
            alt="art-prepfolio-devices"
            width={686}
            height={602}
            quality={100}
          />
        </div>
      </div>
      <div className={baseStyles.caseStudyContainer}>
        <div className={baseStyles.caseStudyMain}>
          <div className={baseStyles.section}>
            <h3>About this project</h3>
            <p>
              Developed as a personal project, Prepfolio aims to eliminate the
              daily hassle of deciding what to cook, helping users save time and
              reduce food waste. The app is still in the design phase, with a
              focus on creating an intuitive and user-friendly interface that
              makes meal planning easy and efficient.
            </p>
          </div>
          <Section content={caseStudy.n1} />
          <Section content={caseStudy.n2} />
          <Section content={caseStudy.n3} />
          <ImgSlider images={imgSrcSlides} />
          <div className={baseStyles.keyContainer}>
            <div className={baseStyles.keyTitle}>Key Takeaway</div>
            <div className={baseStyles.keyContent}>
              This project demonstrates my ability to identify a personal pain
              point and create a practical solution through thoughtful design.
              By conducting user research, defining clear design goals, and
              iterating based on feedback, I have been able to develop an
              intuitive and user-friendly app design. My role as a visual UI
              designer has been crucial in transforming our initial idea into a
              functional and appealing mobile application. This project
              highlights my ability to manage a project from ideation through
              the design phase, even while balancing it with a full-time job.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default prepfolioCaseStudy;
