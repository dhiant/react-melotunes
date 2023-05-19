import { v4 as uuidv4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation } from "swiper";
// custom css
import "../styles/SwiperCarousel.css";
import Card from "../components/Card";

// eslint-disable-next-line react/prop-types
const Carousel = ({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  filteredRecentlyPlayedTracks,
  // eslint-disable-next-line react/prop-types
  featuredPlaylists,
}) => {
  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold py-5">{title}</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        loop={false}
        navigation
        modules={[Navigation]}
      >
        {filteredRecentlyPlayedTracks &&
          // eslint-disable-next-line react/prop-types
          filteredRecentlyPlayedTracks.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <Card
                img={item.track.album.images[1].url}
                title={item.track.name}
                text={item.track.artists.map((artist, index) => (
                  <span key={uuidv4()}>
                    {artist.name}
                    {index !== item.track.artists.length - 1 && ", "}
                  </span>
                ))}
                previewURL={item.track.preview_url}
              />
            </SwiperSlide>
          ))}
        {featuredPlaylists &&
          // eslint-disable-next-line react/prop-types
          featuredPlaylists.map((item) => (
            <SwiperSlide key={uuidv4()}>
              <Card
                tracksHref={item.tracks.href}
                img={item.images[0].url}
                title={item.name}
                text={item.description}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Carousel;
