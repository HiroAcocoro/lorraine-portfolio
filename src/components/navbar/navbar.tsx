"use client";

import {useState, useEffect} from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Logo from "./logo";
import Image from "next/image";

interface NavbarProps {
  scrollTo?: () => void;
  colorTransition?: {
    primary: string;
    bg: string;
  };
}

const Navbar = ({scrollTo, colorTransition}: NavbarProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [screenScrolled, setScreenScrolled] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const getColorTransition = (isPrimary?: boolean) => {
    if (!colorTransition && !isPrimary) {
      return "rgba(248, 197, 212, 0.15)";
    }
    if (!colorTransition) return "#fff";
    if (isPrimary) return colorTransition.primary;
    return colorTransition.bg;
  };

  const getLinkStyle = () => {
    return {
      color: screenScrolled ? getColorTransition(true) : "#fff",
      transition: "color 0.3s ease",
    };
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const {innerWidth, innerHeight} = window;
        if (
          innerWidth !== windowDimensions.width ||
          innerHeight !== windowDimensions.height
        ) {
          setWindowDimensions({width: innerWidth, height: innerHeight});
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [windowDimensions.width, windowDimensions.height]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (offset > windowDimensions.height - 60) {
        setScreenScrolled(true);
      } else {
        setScreenScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowDimensions.height]);

  return (
    <header
      className={styles.main}
      style={{
        boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "unset",
        background: scrolled ? getColorTransition() : "unset",
        backdropFilter: scrolled ? "blur(15.2px)" : "unset",
        WebkitBackdropFilter: scrolled ? "blur(15.2px)" : "unset",
      }}
    >
      <div className={styles.navbarContainer}>
        <div
          className={`${styles.logoContainer} ${
            screenScrolled ? styles.screenScrolled : ""
          }`}
        >
          <Logo
            overrideColor={screenScrolled ? getColorTransition(true) : "white"}
          />
        </div>
        <div className={styles.navbarLinks}>
          <Link href="/" style={getLinkStyle()}>
            home
          </Link>
          <Link
            href="/projects.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={getLinkStyle()}
          >
            projects
          </Link>
          <Link
            href="/Lorraine Andrea Decoy - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={getLinkStyle()}
          >
            resume
          </Link>
        </div>
        <Image
          src="/hamburger.svg"
          className={styles.navbarHamburgerMenu}
          width={30}
          height={20}
          alt="hamburger-menu"
          quality={100}
        />
      </div>
    </header>
  );
};

export default Navbar;
