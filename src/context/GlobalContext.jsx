import { createContext, useReducer } from "react";
import reducer from "./GlobalContextReducer";

const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  token: null,
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
