import { useContext, useEffect } from "react";
import { getAccessTokenFromURL } from "./spotify";
import axios from "axios";
import Login from "./components/Login";
import Player from "./components/Player";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { state, setUser, setToken } = useContext(GlobalContext);

  let fetchUserSpotifyProfile = async (_token) => {
    try {
      const result = await axios.get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${_token}` },
      });
      let data = await result.data;
      // dispatching action to set user data in the global context
      setUser(data.display_name);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const _token = getAccessTokenFromURL();
    window.location.hash = "";

    if (_token) {
      // dispatching action to set token in the global context
      setToken(_token);
      fetchUserSpotifyProfile(_token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{state.token ? <Player /> : <Login />}</>;
}

export default App;
