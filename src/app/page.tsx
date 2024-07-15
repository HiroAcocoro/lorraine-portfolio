"use client";

import {ParallaxProvider} from "react-scroll-parallax";
import styles from "./page.module.css";
import HeroSection from "@/components/home-page/hero-section/HeroSection";
import FeatureProjectsSection from "@/components/home-page/featured-projects-section/FeaturedProjectsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <ParallaxProvider>
          <HeroSection />
          <FeatureProjectsSection />
        </ParallaxProvider>
      </div>
    </main>
  );
}
