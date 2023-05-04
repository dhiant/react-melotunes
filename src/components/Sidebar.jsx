import SideLink from "./SideLink";
import { AiFillHome } from "react-icons/ai";
import { BsPlus, BsSearch } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white px-3">
      <a href="/">
        <img src="/assets/logo.jpg" alt="spotify_logo" className="h-20 p-2.5" />
      </a>
      <SideLink text="Home" Icon={<AiFillHome size="24px" />} />
      <SideLink text="Search" Icon={<BsSearch size="20px" />} />
      <SideLink text="Your Library" Icon={<MdLibraryMusic size="25px" />} />
      <div className="mt-5">
        <SideLink
          text="Create Playlist"
          Icon={<BsPlus size="25px" fill="black" />}
        />
        <SideLink
          text="Liked Songs"
          Icon={<FaHeart size="12px" fill="white" />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
