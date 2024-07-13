import Link from "next/link";
import {FC} from "react";
import styles from "./clay-button.module.css";

interface IClayButtonProps {
  content: string;
  link: string;
  bgColor: string;
  boxShadow: string;
}

const ClayButton: FC<IClayButtonProps> = ({
  content,
  link,
  bgColor,
  boxShadow,
}) => {
  return (
    <Link
      href={link}
      className={styles.btnStyle}
      style={{
        background: bgColor,
        textDecoration: "none",
        color: "#FFFFFF",
        fontWeight: 600,
        fontSize: "16px",
        boxShadow: boxShadow,
      }}
    >
      {content}
    </Link>
  );
};

export default ClayButton;
