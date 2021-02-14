import { Link } from "gatsby";
import React, { useState } from "react";
import { Slant as Hamburger } from "hamburger-react";
import { useMenuToggler } from "./MenuContext";

const Navbar = ({ isHome = false }: { isHome?: boolean }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, toggleIsOpen } = useMenuToggler();
  return (
    <>
      <div style={{ height: "15vh" }} className="flex">
        <div className="w-2/3 px-5 flex items-center">
          <div className="font-logo text-4xl">
            <Link to="/">Urvi Jain</Link>
          </div>
          <div className="md:flex justify-center hidden">
            <div className="ml-40">
              <Link to="/visdom" className="text-xl font-semibold">
                Visdom
              </Link>
            </div>
            <div className="mx-20">
              <Link to="/blog" className="text-xl font-semibold">
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            isHome
              ? "w-1/3 bg-black flex items-center justify-end md:pr-20 pr-5"
              : "w-1/3 flex items-center justify-end md:pr-20 pr-5"
          }
        >
          <Hamburger
            size={30}
            color="#ffffff"
            toggle={toggleIsOpen}
            toggled={isOpen}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
