// eslint-disable-next-line react/prop-types
const PlayList = ({ text }) => {
  return (
    <p className="py-1.5 text-sm font-medium text-gray-500 cursor-pointer transition-colors duration-300 ease-in-out hover:text-white">
      {text}
    </p>
  );
};

export default PlayList;
