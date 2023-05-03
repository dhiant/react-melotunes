import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Player = () => {
  const context = useContext(GlobalContext);
  console.log("Context", context);
  return <div>Player</div>;
};

export default Player;
