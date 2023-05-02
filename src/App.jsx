import { useEffect, useState } from "react";
import { getAccessTokenFromURL } from "./spotify";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(null);
  const [userProfile, setUserProfile] = useState("");

  async function fetchUserSpotifyProfile(_token) {
    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${_token}` },
    });
    return await result.json();
  }

  console.log(userProfile, "userprofile");
  useEffect(() => {
    const _token = getAccessTokenFromURL();
    window.location.hash = "";
    if (_token) {
      setToken(_token);
      fetchUserSpotifyProfile(_token).then((res) => setUserProfile(res));
    }
  }, [token]);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
