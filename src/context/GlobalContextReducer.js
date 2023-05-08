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
    default:
      return state;
  }
}
