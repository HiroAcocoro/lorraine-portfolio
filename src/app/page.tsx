"use client";

import {ParallaxProvider} from "react-scroll-parallax";
import styles from "./page.module.css";
import HeroSection from "@/components/home-page/hero-section/HeroSection";
import FeatureProjectsSection from "@/components/home-page/featured-projects-section/FeaturedProjectsSection";
import FooterSection from "@/components/home-page/footer-section/FooterSection";
import Navbar from "@/components/navbar/navbar";
import {useRef} from "react";

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <>
      <Navbar scrollTo={executeScroll} />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <ParallaxProvider>
            <HeroSection />
            <FeatureProjectsSection projectsRef={projectsRef} />
            <FooterSection />
          </ParallaxProvider>
        </div>
      </main>
    </>
  );
}
