import {FC} from "react";
import styles from "./section.module.css";

type TContent = {
  b?: string;
  content: string;
};

type TSubGroup = {
  subTitle?: string;
  contents: TContent[];
};

interface ISectionContent {
  title: string;
  subGroups: TSubGroup[];
}

const Section: FC<{content: ISectionContent}> = ({content}) => {
  return (
    <div className={styles.section}>
      <h3>{content.title}</h3>
      {content.subGroups.map((group, index) => (
        <div key={index}>
          {group.subTitle && <h4>{group.subTitle}</h4>}
          <ul>
            {group.contents.map((message, index) => (
              <li key={index}>
                {message.b && <b>{message.b}</b>}
                {message.content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Section;
