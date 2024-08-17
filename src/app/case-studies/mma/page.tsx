import styles from "./page.module.css";
import baseStyles from "../case-studies.module.css";
import Image from "next/image";
import caseStudy from "@/constants/mma-case-studies";
import Section from "@/components/case-studies/Section";
import Navbar from "@/components/navbar/navbar";

const mmaCaseStudy = () => {
  return (
    <div className={baseStyles.main}>
      <Navbar
        colorTransition={{primary: "#E787B0", bg: "rgba(248, 197, 212, 0.15)"}}
      />
      <div className={baseStyles.heroBg}>
        <Image
          src="/mma-bg-1.png"
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
              src="/mma-logo.png"
              width={124}
              height={124}
              alt="mma-logo"
            />
            <p>lawyer website</p>
          </div>
          <div className={baseStyles.cardBody}>
            <p>
              A website that provide potential clients with information about
              the lawyer&apos;s services and to facilitate easy contact. It
              serves as a professional online presence to attract and inform
              prospective clients.
            </p>
          </div>
        </div>
        <div id="ultimate-spacer-jutsu" style={{margin: "0px 5%"}} />
        <div className="animated-component">
          <Image
            src="/mma-art-2.png"
            alt="art-mma-devices"
            width={737}
            height={572}
            quality={100}
          />
        </div>
      </div>
      <div className={baseStyles.caseStudyContainer}>
        <div className={baseStyles.caseStudyMain}>
          <div className={baseStyles.section}>
            <h3>About this project</h3>
            <p>
              The aim of this project is to create a simple, informative , and
              responsive website for a lawyer that supports his business
              activity, makes him known to the public and increases the online
              presence of his law office.
            </p>
          </div>
          <Section content={caseStudy.n1} />
          <Section content={caseStudy.n2} />
          <Section content={caseStudy.n3} />
          <Section content={caseStudy.n4} />
          <div style={{marginTop: "100px"}}>
            <div className={styles.paletteImgWrapper}>
              <Image
                src="/mma-palette-1.png"
                alt="mma-color-palette"
                quality={100}
                fill
              />
            </div>
          </div>
          <Section content={caseStudy.n5} />
          <Section content={caseStudy.n6} />
          <Section content={caseStudy.n7} />
          <div className={styles.pageDesignContainer}>
            <div className={styles.pageDesignTitle}>Landing Page Design</div>
            <div className={styles.pageDesignImg}>
              <Image
                src="/mma-page-design.png"
                alt="mma-page-design"
                width={997}
                height={2727}
                quality={100}
                objectFit="cover"
              />
            </div>
          </div>
          <div className={baseStyles.keyContainer}>
            <div className={baseStyles.keyTitle}>Key Takeaway</div>
            <div className={baseStyles.keyContent}>
              This project highlights my ability to independently manage and
              execute a design project from start to finish. Despite the lack of
              direction from the client, I was able to effectively utilized my
              research skills, creativity, and design expertise to deliver a
              high-quality landing page. <br /> <br />
              My proactive approach and ability to work autonomously ensured the
              successful completion of the project, demonstrating my value as a
              UI designer who can deliver results even in the absence of
              detailed client direction.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mmaCaseStudy;
