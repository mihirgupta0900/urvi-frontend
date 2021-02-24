import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import ReactFluidScroll from "react-fluid-scroll";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({
  children,
  isHome = false,
}: {
  children: string | ReactNode;
  isHome?: boolean;
}) => {
  return (
    <div className="font-body">
      {/* <Helmet>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="urvijain"
          data-description="Support me on Buy me a coffee!"
          data-message="Hey there, thanks for dropping by! You can now treat me to a fragrant coffee :D"
          data-color="#FFDD00"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Helmet> */}
      <SideMenu />
      <ReactFluidScroll viscosity={0.3}>
        <Navbar isHome={isHome} />
        {children}
        {/* <Footer /> */}
      </ReactFluidScroll>
    </div>
  );
};

export default Layout;
