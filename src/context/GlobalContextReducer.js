export default function GlobalContextProvider(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playLists: action.payload,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.payload,
      };
    case "RECENTLY_PLAYED_TRACKS":
      return {
        ...state,
        recentlyPlayedTracks: action.payload,
      };
    case "FEATURED_PLAYLISTS":
      return {
        ...state,
        featuredPlaylists: action.payload,
      };
    case "SET_TRACK_INDEX":
      return {
        ...state,
        trackIndex: action.payload,
      };
    default:
      return state;
  }
}
