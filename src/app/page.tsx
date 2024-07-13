"use client";

import {ParallaxProvider} from "react-scroll-parallax";
import styles from "./page.module.css";
import HeroSection from "@/components/home-page/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <ParallaxProvider>
          <HeroSection />
          <div style={{height: "100vh"}} />
        </ParallaxProvider>
      </div>
    </main>
  );
}
