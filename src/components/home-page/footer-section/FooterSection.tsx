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
          <div className={styles.socialsLogo}>
            <Image
              src="/social-facebook.png"
              alt="facebook"
              fill
              quality={100}
            />
          </div>
          <div className={styles.socialsLogo}>
            <Image
              src="/social-instagram.png"
              alt="instagram"
              fill
              quality={100}
            />
          </div>
          <div className={styles.socialsLogo}>
            <Image src="/social-twitter.png" alt="twitter" fill quality={100} />
          </div>
          <div className={styles.socialsLogo}>
            <Image
              src="/social-linkedin.png"
              alt="linkedin"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
