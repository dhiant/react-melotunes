import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import Carousel from "../components/Carousel";
import CarouselLoader from "../components/CarouselLoader";

const Home = () => {
  const { state, setRecentlyPlayedTracks, setFeaturedPlaylists } =
    useContext(GlobalContext);

  const { recentlyPlayedTracks, featuredPlaylists } = state;

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
      setRecentlyPlayedTracks(allTracks);
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
    <div className="relative h-screen flex-1 bg-gradient-to-b from-primary to-black text-white">
      <div className="sm:absolute left-64 sm:w-[calc(100%-256px)] overflow-x-hidden p-7">
        {recentlyPlayedTracks && recentlyPlayedTracks.length > 0 ? (
          <Carousel
            title="Recently Played Tracks"
            recentlyPlayedTracks={recentlyPlayedTracks}
          />
        ) : (
          <CarouselLoader />
        )}
        {featuredPlaylists && featuredPlaylists.length > 0 ? (
          <Carousel
            title="Featured Playlists"
            featuredPlaylists={featuredPlaylists}
          />
        ) : (
          <CarouselLoader />
        )}
      </div>
    </div>
  );
};

export default Home;
