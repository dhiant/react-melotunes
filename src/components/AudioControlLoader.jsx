import ContentLoader from "react-content-loader";

const AudioControlLoader = () => {
  return (
    <ContentLoader
      //   viewBox="0 0 76 124"
      width={300}
      height={40}
      speed={2}
      backgroundColor="#2e2e2e"
      foregroundColor="#4f4f4f"
    >
      <circle cx="20" cy="20" r="20" />
      <rect x="55" y="23" rx="0" ry="0" width="40" height="7.5" />
      <rect x="55" y="6" rx="0" ry="0" width="80" height="7.5" />
    </ContentLoader>
  );
};

export default AudioControlLoader;
