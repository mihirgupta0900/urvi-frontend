import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import ReactFluidScroll from "react-fluid-scroll";
import SideMenu from "./SideMenu";

const Layout = ({
  children,
  isHome = false,
}: {
  children: string | ReactNode;
  isHome?: boolean;
}) => {
  return (
    <div className="font-body">
      <SideMenu />
      <ReactFluidScroll viscosity={0.3}>
        <Navbar isHome={isHome} />
        {children}
      </ReactFluidScroll>
    </div>
  );
};

export default Layout;
