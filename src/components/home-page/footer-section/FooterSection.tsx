import AnimatedTextComponent from "@/components/common/animated-text/AnimatedTextComponent";
import styles from "./footer-section.module.css";
import Image from "next/image";

const FooterSection = () => {
  return (
    <div className={styles.footerSectionContainer}>
      <div className={styles.footerTitle}>
        <AnimatedTextComponent text="Let's make something fun together" />
      </div>
      <div className={styles.socialsWrapper}>
        <div className={styles.socialsContainer}>
          <Image
            src="/social-facebook.png"
            alt="facebook"
            width={93}
            height={95}
            quality={100}
          />
          <Image
            src="/social-instagram.png"
            alt="instagram"
            width={93}
            height={95}
            quality={100}
          />
          <Image
            src="/social-twitter.png"
            alt="twitter"
            width={93}
            height={95}
            quality={100}
          />
          <Image
            src="/social-linkedin.png"
            alt="linkedin"
            width={93}
            height={95}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
