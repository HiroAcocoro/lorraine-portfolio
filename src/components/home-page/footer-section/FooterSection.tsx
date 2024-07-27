import AnimatedTextComponent from "@/components/common/animated-text/AnimatedTextComponent";
import styles from "./footer-section.module.css";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <div className={styles.footerSectionContainer}>
      <div className={styles.footerTitle}>
        <AnimatedTextComponent text="Let's make something fun together" />
      </div>
      <div className={styles.socialsWrapper}>
        <div className={styles.socialsContainer}>
          <Link
            href="https://www.facebook.com/profile.php?id=61559469370824"
            target="_blank"
          >
            <div className={styles.socialsLogo}>
              <Image
                src="/social-facebook.png"
                alt="facebook"
                fill
                quality={100}
              />
            </div>
          </Link>
          <Link href="https://www.instagram.com/lorenlpsum_/" target="_blank">
            <div className={styles.socialsLogo}>
              <Image
                src="/social-instagram.png"
                alt="instagram"
                fill
                quality={100}
              />
            </div>
          </Link>
          <Link href="https://x.com/Iorenlpsum" target="_blank">
            <div className={styles.socialsLogo}>
              <Image
                src="/social-twitter.png"
                alt="twitter"
                fill
                quality={100}
              />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/lorraine-andrea-decoy-221397286/"
            target="_blank"
          >
            <div className={styles.socialsLogo}>
              <Image
                src="/social-linkedin.png"
                alt="linkedin"
                fill
                quality={100}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
