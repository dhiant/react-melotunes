// eslint-disable-next-line react/prop-types
const Card = ({ img, title, text }) => {
  return (
    <div className="w-44 h-60 flex flex-col text-start bg-primary p-4 rounded-md hover:bg-primaryDark hover:cursor-pointer">
      <img src={img} alt="song_pic" className="h-32 rounded-md" />
      <div className="w-32 px-2">
        <h2 className="py-2 text-base font-semibold text-white truncate">
          {title}
        </h2>
        <p className="pb-1.5 text-sm text-gray-400 truncate">{text}</p>
      </div>
    </div>
  );
};

export default Card;