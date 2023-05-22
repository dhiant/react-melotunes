import { createContext, useReducer } from "react";
import reducer from "./GlobalContextReducer";

const initialState = {
  user: null,
  playLists: [],
  playing: false,
  recentlyPlayedTracks: null,
  featuredPlaylists: null,
  token: null,
  trackIndex: {
    category: "recently played",
    index: 0,
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

  // play/pause audio
  function setPlaying(boolean) {
    dispatch({
      type: "SET_PLAYING",
      payload: boolean,
    });
  }

  function setRecentlyPlayedTracks(arr) {
    dispatch({
      type: "RECENTLY_PLAYED_TRACKS",
      payload: arr,
    });
  }

  function setFeaturedPlaylists(arr) {
    dispatch({
      type: "FEATURED_PLAYLISTS",
      payload: arr,
    });
  }

  function setTrackIndex(obj) {
    dispatch({
      type: "SET_TRACK_INDEX",
      payload: obj,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        setUser,
        setToken,
        setPlayLists,
        setPlaying,
        setRecentlyPlayedTracks,
        setFeaturedPlaylists,
        setTrackIndex,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
