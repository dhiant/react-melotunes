import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Sidebar from "./Sidebar";
import AudioControl from "./AudioControl";
import Home from "../pages/Home";

const Player = () => {
  const context = useContext(GlobalContext);
  console.log("Context", context);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
      <AudioControl />
    </>
  );
};

export default Player;
