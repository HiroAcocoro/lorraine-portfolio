import React, {FC} from "react";

interface IAnimatedComponentProps {
  children: JSX.Element;
}

const AnimatedComponent: FC<IAnimatedComponentProps> = ({children}) => {
  return <div className="animated-component">{children}</div>;
};

export default AnimatedComponent;
