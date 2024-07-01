import styles from "./page.module.css";
import Image from "next/image";
import {EB_Garamond, Montserrat} from "next/font/google";
import caseStudies from "@/constants/case-studies";
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
    <div className={styles.main}>
      <div className={styles.heroBg}>
        <Image
          src="/mma-bg-1.svg"
          alt="background-1"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.heroSection}>
        <div className={styles.clipart1}>
          <Image
            src="/mma-art-1.png"
            width={219}
            height={366}
            alt="art-girl"
            quality={100}
          />
        </div>
        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <Image
              src="/mma-logo.png"
              width={124}
              height={124}
              alt="mma-logo"
            />
            <p>lawyer website</p>
          </div>
          <div className={styles.cardBody}>
            <p>
              A website that provide potential clients with information about
              the lawyer&apos;s services and to facilitate easy contact. It
              serves as a professional online presence to attract and inform
              prospective clients.
            </p>
          </div>
        </div>
        <div className={styles.floatingArt}>
          <Image
            src="/mma-art-2.png"
            alt="art-mma-devices"
            width={737}
            height={572}
            quality={100}
          />
        </div>
      </div>
      <div className={styles.caseStudyContainer}>
        <div className={styles.caseStudyMain}>
          <div className={styles.section}>
            <h3>About this project</h3>
            <p>
              The aim of this project is to create a simple, informative , and
              responsive website for a lawyer that supports his business
              activity, makes him known to the public and increases the online
              presence of his law office.
            </p>
          </div>
          <Section content={caseStudies.n1} />
          <Section content={caseStudies.n2} />
          <Section content={caseStudies.n3} />
          <Section content={caseStudies.n4} />
          <div className={styles.section} style={{marginTop: "100px"}}>
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
          <Section content={caseStudies.n5} />
          <Section content={caseStudies.n6} />
          <Section content={caseStudies.n7} />
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
          <div className={styles.keyContainer}>
            <div className={styles.keyTitle}>Key Takeaway</div>
            <div className={styles.keyContent}>
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
