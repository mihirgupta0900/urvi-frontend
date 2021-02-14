import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { compare } from "../utils";
import { useMenuToggler } from "./MenuContext";

const SideMenu = () => {
  const { isOpen, toggleIsOpen, changeState } = useMenuToggler();

  const links = [
    { name: "Home", link: "/" },
    { name: "Notes", link: "/notes" },
    { name: "3D Art", link: "/3d" },
  ];

  const data = useStaticQuery<Data>(graphql`
    query MenuQuery {
      strapi {
        sidemenuitems {
          order
          link
          display
        }
      }
    }
  `);

  const sortedList = data.strapi.sidemenuitems.sort((a, b) =>
    compare(a.order, b.order)
  );

  return (
    <Menu
      styles={{
        bmMenu: {
          background: "black",
          color: "white",
        },
      }}
      onStateChange={(state) => changeState(state.isOpen)}
      isOpen={isOpen}
      onClose={toggleIsOpen}
    >
      {sortedList.map(({ display, link }, i) => (
        <Link
          className={
            i === 0
              ? "focus:outline-none py-6 text-center text-xl pt-14"
              : "focus:outline-none py-6 text-center text-xl"
          }
          onClick={toggleIsOpen}
          to={link}
        >
          {display}
        </Link>
      ))}
    </Menu>
  );
};

export interface Sidemenuitem {
  order: number;
  link: string;
  display: string;
}

export interface Strapi {
  sidemenuitems: Sidemenuitem[];
}

export interface Data {
  strapi: Strapi;
}

export default SideMenu;
