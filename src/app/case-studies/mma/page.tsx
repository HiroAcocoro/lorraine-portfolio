import styles from "./page.module.css";
import baseStyles from "../case-studies.module.css";
import Image from "next/image";
import {EB_Garamond, Montserrat} from "next/font/google";
import caseStudy from "@/constants/mma-case-studies";
import Section from "@/components/case-studies/Section";

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const mmaCaseStudy = () => {
  return (
    <div className={baseStyles.main}>
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
            {/* @TODO extract to component */}
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyCardHeader}>
                <h3>Typography</h3>
                <div className={eb_garamond.className}>
                  <div className={styles.caseStudyTypography}>
                    <h3>EB GARAMOND FONT FAMILY</h3>
                    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p>abcdefghijklmnopqrstuvwxyz</p>
                  </div>
                </div>
                <div className={montserrat.className}>
                  <div className={styles.caseStudyTypography}>
                    <h3>MONTSERRAT FONT FAMILY</h3>
                    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p>abcdefghijklmnopqrstuvwxyz</p>
                  </div>
                </div>
              </div>
              <div className={styles.colorPaletteContainer}>
                <div className={styles.colorPaletteInner}>
                  <div className={styles.colorPaletteTitle}>
                    <b style={{fontWeight: 600}}>Color</b>
                    <br />
                    Palette
                  </div>
                  <div className={styles.colorsContainer}>
                    <span
                      className={styles.color}
                      style={{backgroundColor: "#EAC15A"}}
                    >
                      #EAC15A
                    </span>
                    <span
                      className={styles.color}
                      style={{backgroundColor: "#2C2F3A"}}
                    >
                      #2C2F3A
                    </span>
                    <span
                      className={styles.color}
                      style={{backgroundColor: "#16181D"}}
                    >
                      #16181D
                    </span>
                    <span
                      className={styles.color}
                      style={{backgroundColor: "#696969"}}
                    >
                      #696969
                    </span>
                  </div>
                </div>
              </div>
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
              This project highlights my ability to manage and execute a design
              project independently, from initial consultation to launch.
              Despite the simplicity of the project, I demonstrated creativity,
              adaptability, and a user-centered approach to deliver an effective
              landing page.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mmaCaseStudy;
