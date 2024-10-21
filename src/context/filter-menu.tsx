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
  temp: FilterStructure;
  main: FilterStructure;
  status: FILTER_STATUS;
  point: {
    x: number;
    y: number;
  };
} = {
  temp: {
    date: "",
    email: "",
    organization: [],
    selectedOrganization: "",
    phoneNumber: "",
    selectedDate: null,
    selectedStatus: "",
    status: [],
  },
  main: {
    date: "",
    email: "",
    organization: [],
    selectedOrganization: "",
    phoneNumber: "",
    selectedDate: null,
    selectedStatus: "",
    status: [],
  },
  status: FILTER_STATUS.CLOSED,
  point: {
    x: 0,
    y: 0,
  },
};
type IMenuFilterCtx = typeof defaultValue;

type FILTER_ACTIONS =
  | {
      type: ACTIONS.CHANGE;
      payload: {
        value: any;
        name: keyof IMenuFilterCtx["temp"];
      };
    }
  | {
      type: ACTIONS.OPEN;
      payload: {
        point: { x: number; y: number };
      };
    }
  | {
      type: ACTIONS.CLOSE;
    };
const MenuFilterCtx = createContext<{
  filters: typeof defaultValue;
  dispatch?: Dispatch<FILTER_ACTIONS>;
}>({ filters: defaultValue });

const filterReducer = (state: typeof defaultValue, action: FILTER_ACTIONS) => {
  let copiedState = { ...state };
  switch (action.type) {
    case ACTIONS.CHANGE:
      const { name, value } = action.payload;
      copiedState.temp[name] = value;
      break;
    case ACTIONS.OPEN:
      const { point } = action.payload;
      copiedState.point = { ...point };
      copiedState.status = FILTER_STATUS.OPEN;
      break;
    case ACTIONS.CLOSE:
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
