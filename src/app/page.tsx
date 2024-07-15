"use client";

import {ParallaxProvider} from "react-scroll-parallax";
import styles from "./page.module.css";
import HeroSection from "@/components/home-page/hero-section/HeroSection";
import FeatureProjectsSection from "@/components/home-page/featured-projects-section/FeaturedProjectsSection";
import FooterSection from "@/components/home-page/footer-section/FooterSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <ParallaxProvider>
          <HeroSection />
          <FeatureProjectsSection />
          <FooterSection />
        </ParallaxProvider>
      </div>
    </main>
  );
}
