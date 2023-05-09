import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Sidebar from "./Sidebar";
import Body from "./Body";
import AudioControl from "./AudioControl";

const Player = () => {
  const context = useContext(GlobalContext);
  console.log("Context", context);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
      <AudioControl />
    </>
  );
};

export default Player;
