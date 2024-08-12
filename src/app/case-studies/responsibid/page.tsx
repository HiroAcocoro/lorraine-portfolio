import Section from "@/components/case-studies/Section";
import baseStyles from "../case-studies.module.css";
import styles from "./page.module.css";
import Image from "next/image";
import caseStudy from "@/constants/responsibid-case-studies";
import RbPreviewCarousel from "./RbPreviewCarousel";

const responsibidCaseStudy = () => {
  return (
    <div className={baseStyles.main}>
      <div className={baseStyles.heroBg}>
        <Image
          src="/rb-bg-1.png"
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
              src="/rb-logo.png"
              width={350}
              height={50}
              alt="responsibid-logo"
            />
          </div>
          <div className={baseStyles.subHeader}>
            The World&apos;s Best Selling Tool For The Home Service Industry
          </div>
          <div className={baseStyles.cardBody}>
            <p>
              A software tool designed to help service-based businesses manage
              and automate their bidding and sales processes. It provides a
              range of features aimed at streamlining the workflow from initial
              customer contact to closing a sale.
            </p>
          </div>
        </div>
        <div id="ultimate-spacer-jutsu" style={{margin: "0px 5%"}} />
        <div className="animated-component">
          <Image
            src="/rb-art-1.png"
            alt="responsibid-devices-design"
            width={744}
            height={601}
            quality={100}
          />
        </div>
      </div>
      <div className={baseStyles.caseStudyContainer}>
        <div className={baseStyles.caseStudyMain}>
          <div className={baseStyles.section}>
            <h3>About this project</h3>
            <p>
              The redesign of the ResponsiBid software tool aimed to address the
              outdated and complex user interface, making it more intuitive and
              user-friendly for new users while incorporating new
              functionalities. As the Visual UI Designer, my primary
              responsibility was to create high-fidelity designs. The project
              involved a collaborative effort with our product manager, who
              functioned as the UI researcher, and the lead UI designer. The
              process included requirement gathering, conceptualization, user
              testing, iterative design updates, and close collaboration with
              the development team to ensure a seamless implementation.
            </p>
          </div>
          <Section content={caseStudy.n1} />
          <Section content={caseStudy.n2} />
          <Section content={caseStudy.n3} />
          <Section content={caseStudy.n4} />
          <div className={styles.imgArtWrapper1}>
            <Image
              fill
              src="/rb-art-2.png"
              alt="responsibid-art-1"
              quality={100}
            />
          </div>
          <Section content={caseStudy.n5} />
          <Section content={caseStudy.n6} />
          <Section content={caseStudy.n7} />
          <div className={styles.sectionSubHeader}>Design Preview</div>
          <RbPreviewCarousel />
          <div className={baseStyles.keyContainer}>
            <div className={baseStyles.keyTitle}>Key Takeaway</div>
            <div className={baseStyles.keyContent}>
              This project highlights my ability to deliver high-quality visual
              UI designs in a collaborative team environment. Despite focusing
              primarily on high-fidelity design work, I demonstrated key skills
              in creating multiple design variations that addressed user needs
              and business goals. I effectively presented designs to the team
              and incorporated feedback from user testing. By collaborating
              closely with the development team, I ensured the accurate
              implementation of design components. I adapted and iterated on
              designs based on user feedback to enhance usability and
              functionality. <br />
              <br /> My role as a visual UI designer was crucial in transforming
              the outdated and complex legacy design into a modern,
              user-friendly interface. This project showcases my ability to
              contribute significantly to a redesign effort, working seamlessly
              within a multidisciplinary team to achieve the project objectives.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default responsibidCaseStudy;
