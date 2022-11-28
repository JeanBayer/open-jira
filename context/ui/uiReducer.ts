import { UIState } from ".";

type UIActionType =
  | {
      type: "open - side bar";
    }
  | {
      type: "close - side bar";
    };
    
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "open - side bar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "close - side bar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    default:
      return state;
  }
};
