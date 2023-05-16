import { createContext, useReducer } from "react";
import reducer from "./GlobalContextReducer";

const initialState = {
  user: null,
  playLists: [],
  playing: true,
  item: null,
  token: null,
  previewURL: null,
  trackData: {
    img: "https://i.scdn.co/image/ab67616d000048512bdcb339402ebd78651f09c8",
    text: "Zyan, Sia",
    title: "Dusk Till Dawn",
  },
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

  // set img, tile, artist(text) of track
  function setTrackData(obj) {
    dispatch({
      type: "SET_TRACK_DATA",
      payload: obj,
    });
  }

  // play/pause audio
  function setPlaying(boolean) {
    dispatch({
      type: "SET_PLAYING",
      payload: boolean,
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
        setTrackData,
        setPlaying,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
