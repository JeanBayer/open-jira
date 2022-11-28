import { useReducer } from "react";
import { UIContext, uiReducer } from "./";

type Props = {
  children: React.ReactNode;
};

export interface UIState {
  sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

export const UIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const openMenu = () => dispatch({ type: "open - side bar" });
  const closeMenu = () => dispatch({ type: "close - side bar" });
  return (
    <UIContext.Provider
      value={{
        ...state,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
