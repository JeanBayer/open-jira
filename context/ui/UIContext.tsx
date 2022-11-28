import { createContext } from "react";

interface UIContextProps {
  sideMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const UIContext = createContext({} as UIContextProps);
