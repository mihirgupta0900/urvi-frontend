import React, { ReactNode } from "react";
import Fade from "react-reveal/Fade";

const TopFade = ({ children }: { children: ReactNode }) => {
  return (
    <Fade duration={1500} top>
      {children}
    </Fade>
  );
};

export default TopFade;
