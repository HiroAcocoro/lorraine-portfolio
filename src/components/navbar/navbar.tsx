"use client";

import {useState, useEffect} from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [screenScrolled, setScreenScrolled] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

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
    <header className={`${styles.main} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <div
          className={`${styles.logoContainer} ${
            screenScrolled ? styles.screenScrolled : ""
          }`}
        >
          <Logo overrideColor={screenScrolled ? "#E787B0" : "white"} />
        </div>
        <div
          className={`${styles.navbarLinks} ${
            screenScrolled ? styles.screenScrolled : ""
          }`}
        >
          <Link href="/">home</Link>
          <Link href="/">projects</Link>
          <Link href="/">contact</Link>
          <Link href="/">resume</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
