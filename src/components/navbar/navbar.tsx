"use client";

import {useState, useEffect} from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Logo from "./logo";

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [screenScrolled, setScreenScrolled] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      const {innerWidth, innerHeight} = window;
      if (
        innerWidth !== windowDimensions.width ||
        innerHeight !== windowDimensions.height
      ) {
        setWindowDimensions({width: innerWidth, height: innerHeight});
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

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
  }, []);

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
