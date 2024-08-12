"use client";

import styles from "./page.module.css";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {EmblaOptionsType} from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

const RbPreviewCarousel = () => {
  const options: EmblaOptionsType = {loop: true};
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  const imgSlides = [
    "/rb-art-gallery-1.png",
    "/rb-art-gallery-2.png",
    "/rb-art-gallery-3.png",
    "/rb-art-gallery-4.png",
    "/rb-art-gallery-5.png",
    "/rb-art-gallery-6.png",
  ];

  return (
    <section className={styles.carousel}>
      <div className={styles.carouselViewport} ref={emblaRef}>
        <div className={styles.carouselContainer}>
          {imgSlides.map((src, index) => (
            <div className={styles.carouselSlide} key={src}>
              <div className={styles.imgArtWrapper2}>
                <Image
                  src={src}
                  fill
                  alt={`design-preview-${index}`}
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RbPreviewCarousel;
