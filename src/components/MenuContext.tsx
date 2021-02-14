import React, { createContext, ReactNode, useContext, useState } from "react";

const MenuStateContext = createContext({
  isOpen: false,
  toggleIsOpen: () => {},
  changeState: (state: boolean) => {},
});

const MenuContext = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuStateContext.Provider
      value={{
        isOpen,
        toggleIsOpen: () => setIsOpen((state) => !state),
        changeState: setIsOpen,
      }}
    >
      {children}
    </MenuStateContext.Provider>
  );
};

export const useMenuToggler = () => useContext(MenuStateContext);

export default ({ element }: { element: ReactNode }) => (
  <MenuContext>{element}</MenuContext>
);
