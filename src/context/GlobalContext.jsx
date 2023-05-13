import { createContext, useReducer } from "react";
import reducer from "./GlobalContextReducer";

const initialState = {
  user: null,
  playLists: [],
  playing: true,
  item: null,
  token: null,
  previewURL: null,
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

  function setPlayLists(playLists) {
    dispatch({
      type: "SET_PLAYLISTS",
      payload: playLists,
    });
  }

  function setPreviewURL(previewURL) {
    dispatch({
      type: "SET_Preview_URL",
      payload: previewURL,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        setUser,
        setToken,
        setPlayLists,
        setPreviewURL,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
