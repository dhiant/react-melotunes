import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import Carousel from "../components/Carousel";

const Home = () => {
  const { state } = useContext(GlobalContext);
  const [recentlyPlayedtracks, setRecenltyPlayedTracks] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  // filtered track to avoid mapping of repeated(same) tracks
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

  // get recently played tracks from spotify
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

  // get featured playlists
  let getFeaturedPlaylists = async () => {
    try {
      const result = await axios.get(
        "https://api.spotify.com/v1/browse/featured-playlists",
        {
          headers: { Authorization: `Bearer ${state.token}` },
        }
      );
      const data = await result.data;
      setFeaturedPlaylists(data.playlists.items);
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecentlyPlayedTracks();
    getFeaturedPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-[calc(100%-256px)] h-screen flex-1 bg-gradient-to-b from-primary to-black text-white">
      <div className="absolute left-64 w-3/4 p-7">
        <Carousel
          title="Recently Played Tracks"
          filteredRecentlyPlayedTracks={filteredRecentlyPlayedTracks}
        />
        <Carousel
          title="Featured Playlists"
          featuredPlaylists={featuredPlaylists}
        />
      </div>
    </div>
  );
};

export default Home;