import React, { useReducer } from "react";
import { createContext } from "react";
import { WhetherAppReducer } from "./reducers/WhetherAppReducer";

export const Cart = createContext();

const ContextApi = ({ children }) => {
  const initialState = {
    temp: "",
    humidity: "",
    windSpeed: "",
    mainCondition: "",
cityName: ""
  };

  const [state, dispatch] = useReducer(WhetherAppReducer, initialState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default ContextApi;
