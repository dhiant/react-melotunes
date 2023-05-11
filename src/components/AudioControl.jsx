import { AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import {
  MdOutlineFavoriteBorder,
  MdOutlinePictureInPictureAlt,
  MdPauseCircle,
  MdPlayCircle,
} from "react-icons/md";
import { TbArrowsShuffle, TbHeartFilled, TbMicrophone2 } from "react-icons/tb";
import { RxLoop } from "react-icons/rx";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { useState } from "react";

const AudioControl = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [enableShuffle, setEnableShuffle] = useState(false);
  const [enableRepeat, setEnableRepeat] = useState(false);
  const [setFavourite, setSetFavourite] = useState(false);
  const [setVolume, setSetVolume] = useState(20);

  const MAX = 100;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(setVolume * 100) / MAX}% 100%`,
    };
  };

  return (
    <div className="z-10 fixed bottom-0 w-full h-24 p-5 bg-secondary border-t-2 border-[#282828]">
      <div className="flex justify-between">
        <div className="w-60 flex basis-1/3 text-white items-center">
          <img
            src="https://i.scdn.co/image/ab67616d000048512bdcb339402ebd78651f09c8"
            alt="song_picture"
            className="w-14 h-14 rounded"
          />
          <div className="flex flex-col pl-3 w-1/2">
            <h4 className="text-base font-normal truncate">
              Best Song of the Year
            </h4>
            <p className="text-gray-500 text-sm">Zyan, Sia</p>
          </div>
          <div className="pl-4 flex gap-x-4">
            {setFavourite ? (
              <TbHeartFilled
                color="#1db954"
                size="22px"
                title="Save to Your Library"
                onClick={() => setSetFavourite(!setFavourite)}
              />
            ) : (
              <MdOutlineFavoriteBorder
                fill="grey"
                size="22px"
                title="Save to Your Library"
                onClick={() => setSetFavourite(!setFavourite)}
              />
            )}
            <MdOutlinePictureInPictureAlt
              fill="grey"
              size="20px"
              title="Picture in picture"
            />
          </div>
        </div>
        <div className="text-white flex basis-1 justify-center items-center gap-x-4">
          <TbArrowsShuffle
            size="20px"
            title="Enable Shuffle"
            stroke={enableShuffle ? "#1db954" : "grey"}
            onClick={() => setEnableShuffle(!enableShuffle)}
          />
          <AiOutlineStepBackward size="24px" fill="#9d9d9d" title="Previous" />
          {isPlay ? (
            <MdPauseCircle
              size="40px"
              onClick={() => setIsPlay(!isPlay)}
              title="Pause"
            />
          ) : (
            <MdPlayCircle
              size="40px"
              onClick={() => setIsPlay(!isPlay)}
              title="Play"
            />
          )}
          <AiOutlineStepForward size="24px" fill="#9d9d9d" title="Next" />
          <RxLoop
            size="20px"
            title="Enable Repeat"
            color={enableRepeat ? "#1db954" : "grey"}
            onClick={() => setEnableRepeat(!enableRepeat)}
          />
        </div>
        <div className="w-fit py-4 text-white flex items-center basis-1/3 gap-x-4 justify-end">
          <TbMicrophone2
            size="22px"
            stroke={showLyrics ? "#1db954" : "grey"}
            className="cursor-pointer"
            title="Lyrics"
            onClick={() => setShowLyrics(!showLyrics)}
          />
          {isMute ? (
            <HiOutlineSpeakerXMark
              size="22px"
              title="Unmute"
              onClick={() => setIsMute(!isMute)}
            />
          ) : (
            <HiOutlineSpeakerWave
              size="20px"
              title="Mute"
              onClick={() => setIsMute(!isMute)}
            />
          )}
          <div className="inline -mt-1">
            <input
              type="range"
              value={setVolume}
              onChange={(e) => setSetVolume(e.target.value)}
              min="0"
              max={MAX}
              style={getBackgroundSize()}
              className="accent-[#1db954] w-3/4 h-1 rounded-lg bg-gradient-to-r from-green to-green bg-no-repeat appearance-none cursor-pointer dark:bg-gray-700 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioControl;
