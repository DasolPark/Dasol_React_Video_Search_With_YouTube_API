import React from 'react';

const VideoList = ({ videos }) => {
  const videoItems = videos.map(video => {
    return (
      <img
        src={video.snippet.thumbnails.medium.url}
        key={video.id.videoId}
        alt={video.snippet.description}
      ></img>
    );
  });

  return <div>{videoItems}</div>;
};

export default VideoList;
