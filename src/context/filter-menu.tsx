/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { ACTIONS, FILTER_STATUS } from "@/utils/constants";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
const defaultValue: {
  main: FilterStructure;
  status: FILTER_STATUS;
  organization: string[];
} = {
  main: {
    date: "",
    email: "",
    selectedOrganization: "",
    phoneNumber: "",
    selectedStatus: "",
    username: "",
  },
  organization: [],
  status: FILTER_STATUS.CLOSED,
};
type IMenuFilterCtx = typeof defaultValue;

type FILTER_ACTIONS =
  | {
      type: ACTIONS.OPEN;
    }
  | {
      type: ACTIONS.CLOSE;
    }
  | {
      type: ACTIONS.ADD_ORGANIZARION;
      payload: {
        organizations: string[];
      };
    }
  | {
      type: ACTIONS.APPLY;
      payload: FilterStructure;
    }
  | { type: ACTIONS.RESET };
const MenuFilterCtx = createContext<{
  filters: typeof defaultValue;
  dispatch?: Dispatch<FILTER_ACTIONS>;
}>({ filters: defaultValue });

const filterReducer = (state: typeof defaultValue, action: FILTER_ACTIONS) => {
  let copiedState = { ...state };
  switch (action.type) {
    case ACTIONS.OPEN:
      copiedState.status = FILTER_STATUS.OPEN;
      break;
    case ACTIONS.CLOSE:
      copiedState.status = FILTER_STATUS.CLOSED;
      break;
    case ACTIONS.ADD_ORGANIZARION:
      copiedState.organization = action.payload.organizations;
      break;
    case ACTIONS.APPLY:
      copiedState.main = action.payload;
      copiedState.status = FILTER_STATUS.CLOSED;
      break;
    case ACTIONS.RESET:
      copiedState.main = defaultValue.main;
      copiedState.status = FILTER_STATUS.CLOSED;
      break;
    default:
      copiedState = defaultValue;
  }
  return copiedState;
};
const MenuFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, dispatch] = useReducer(filterReducer, defaultValue);
  return (
    <MenuFilterCtx.Provider value={{ filters, dispatch }}>
      {children}
    </MenuFilterCtx.Provider>
  );
};

export default MenuFilterProvider;
export const useMenuFilter = () => useContext(MenuFilterCtx);
