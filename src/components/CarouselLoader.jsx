import React from "react";
import ContentLoader from "react-content-loader";
import { v4 as uuidv4 } from "uuid";

const CarouselLoader = () => {
  let width = "2716";
  let height = "300";
  let rectData = [
    { x: 30, y: 60 },
    { x: 228, y: 60 },
    { x: 426, y: 60 },
    { x: 624, y: 60 },
    { x: 822, y: 60 },
    { x: 1020, y: 60 },
    { x: 1218, y: 60 },
    { x: 1416, y: 60 },
    { x: 1614, y: 60 },
    { x: 1812, y: 60 },
    { x: 2010, y: 60 },
    { x: 2208, y: 60 },
    { x: 2406, y: 60 },
    { x: 2604, y: 60 },
  ];

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      speed={2}
      width={width}
      height={height}
      backgroundColor="#2e2e2e"
      foregroundColor="#4f4f4f"
    >
      <rect x="5" y="20" rx="0" ry="0" width="130" height="23" />

      {rectData.map((rect) => (
        <React.Fragment key={uuidv4()}>
          <rect x={rect.x} y={rect.y} rx="0" ry="0" width="175" height="130" />
          <rect
            x={rect.x}
            y={rect.y + 139}
            rx="0"
            ry="0"
            width="175"
            height="15"
          />
          <rect
            x={rect.x}
            y={rect.y + 161}
            rx="0"
            ry="0"
            width="120"
            height="15"
          />
        </React.Fragment>
      ))}
    </ContentLoader>
  );
};

export default CarouselLoader;
