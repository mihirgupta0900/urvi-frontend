import React, { ReactNode } from "react";
import Fade from "react-reveal/Fade";

const TopFade = ({ children }: { children: ReactNode }) => {
  return <Fade duration={2500}>{children}</Fade>;
};

export default TopFade;
