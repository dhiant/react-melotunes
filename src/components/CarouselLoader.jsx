import React from "react";
import ContentLoader from "react-content-loader";
import { v4 as uuidv4 } from "uuid";

const CarouselLoader = () => {
  let width = "2716";
  let height = "300";
  let rectData = [
    { x: 30, y: 60 },
    { x: 257, y: 60 },
    { x: 484, y: 60 },
    { x: 711, y: 60 },
    { x: 938, y: 60 },
    { x: 1165, y: 60 },
    { x: 1392, y: 60 },
    { x: 1619, y: 60 },
    { x: 1846, y: 60 },
    { x: 2073, y: 60 },
    { x: 2300, y: 60 },
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
      <rect x="30" y="20" rx="0" ry="0" width="130" height="23" />

      {rectData.map((rect) => (
        <React.Fragment key={uuidv4()}>
          <rect x={rect.x} y={rect.y} rx="0" ry="0" width="200" height="120" />
          <rect
            x={rect.x}
            y={rect.y + 129}
            rx="0"
            ry="0"
            width="200"
            height="15"
          />
          <rect
            x={rect.x}
            y={rect.y + 151}
            rx="0"
            ry="0"
            width="140"
            height="15"
          />
        </React.Fragment>
      ))}
    </ContentLoader>
  );
};

export default CarouselLoader;
