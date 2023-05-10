import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import Carousel from "../components/Carousel";

const Home = () => {
  const { state } = useContext(GlobalContext);
  const [recentlyPlayedtracks, setRecenltyPlayedTracks] = useState([]);

  //   filtered track to avoid mapping of repeated(same) tracks
  const filteredRecentlyPlayedTracks = recentlyPlayedtracks.reduce(
    (acc, current) => {
      const existingTrack = acc.find(
        (obj) => obj.track.album.name === current.track.album.name
      );
      if (!existingTrack) {
        acc.push(current);
      }
      return acc;
    },
    []
  );

  //   get recently played tracks from spotify
  let getRecentlyPlayedTracks = async () => {
    try {
      const result = await axios.get(
        "https://api.spotify.com/v1/me/player/recently-played",
        {
          headers: { Authorization: `Bearer ${state.token}` },
        }
      );
      let data = await result.data;
      let allTracks = data.items;
      setRecenltyPlayedTracks(allTracks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecentlyPlayedTracks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-1 h-screen p-7 bg-gradient-to-b from-primary to-black text-white">
      <Carousel
        title="Recently Played Tracks"
        filteredRecentlyPlayedTracks={filteredRecentlyPlayedTracks}
      />
    </div>
  );
};

export default Home;
