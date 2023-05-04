// eslint-disable-next-line react/prop-types
const SideLink = ({ text, Icon }) => {
  return (
    <div className="px-6 h-10 flex gap-x-4 items-center">
      {text === "Create Playlist" ? (
        <div className="w-6 h-6 bg-gray-400 border-none rounded flex items-center justify-center">
          {Icon}
        </div>
      ) : text === "Liked Songs" ? (
        <div className="w-6 h-6 bg-gradient-to-br from-[#450af5] to-[#c4efd9] border-none rounded flex items-center justify-center">
          {Icon}
        </div>
      ) : (
        Icon
      )}
      <p className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-white">
        {text}
      </p>
    </div>
  );
};

export default SideLink;
