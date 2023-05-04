import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

const Player = () => {
  const context = useContext(GlobalContext);
  console.log("Context", context);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </>
  );
};

export default Player;
