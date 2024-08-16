import {FC} from "react";
import styles from "./img-slider.module.css";
import Image from "next/image";

interface ImgSliderProps {
  images: string[];
}

const ImgSlider: FC<ImgSliderProps> = ({images}) => {
  const col1Div = images.slice(0, 2);
  const col2Div = images.slice(2, 5);
  const col3Div = images.slice(5, 8);
  const col4Div = images.slice(8, 11);

  const repeatImages = (colDiv: string[]) => {
    return [...colDiv, ...colDiv, ...colDiv];
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        {[col1Div, col2Div, col3Div, col4Div].map((colDiv, colIndex) => (
          <div
            key={colIndex}
            className={`${styles.imgCol} ${styles[`col${colIndex + 1}`]}`}
          >
            {repeatImages(colDiv).map((img, index) => (
              <div key={`${img}-${index}`} className={styles.imgWrapper}>
                <Image
                  src={img}
                  alt={`img-slide-${index}-column-${colIndex + 1}`}
                  fill
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;
