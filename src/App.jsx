import { useEffect, useState } from "react";
import { getAccessTokenFromURL } from "./spotify";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const _token = getAccessTokenFromURL();
    window.location.hash = "";
    console.log("token", token);
    if (_token) {
      setToken(_token);
    }
  }, [token]);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
