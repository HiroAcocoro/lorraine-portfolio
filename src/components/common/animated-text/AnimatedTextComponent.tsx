import {FC} from "react";
import styles from "./animated-text.module.css";

interface IAnimatedProps {
  text: string;
}

const AnimatedTextComponent: FC<IAnimatedProps> = ({text}) => {
  return <p className={styles.text}>{text}</p>;
};

export default AnimatedTextComponent;
