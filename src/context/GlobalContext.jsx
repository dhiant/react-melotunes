import { createContext, useReducer } from "react";
import reducer from "./GlobalContextReducer";

const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  token:
    "BQD--BO_67xtv46dbQRbbW08JaoK2tiu6PaVf1FDnEj56Kkysf2R0g2xqGwSRXI9pevtVeBObL-dYKyMGEpw9-qX2c77vZVQaMN1dYqNc9AUOsS2WSDDINLY6mCA_8Sj9actfryTI_KhFk2w3hbJ1fR4CHbZfGNCfd_WSEHPV4FN2jHMXlloL0XKyRnuC4ovFv_xlf2IAQnPsT3sQE3jC9jsxhODD_l8iUw",
};

export const GlobalContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setUser(username) {
    dispatch({
      type: "SET_USER",
      payload: username,
    });
  }

  function setToken(token) {
    dispatch({
      type: "SET_TOKEN",
      payload: token,
    });
  }

  return (
    <GlobalContext.Provider value={{ state, setUser, setToken }}>
      {children}
    </GlobalContext.Provider>
  );
};
