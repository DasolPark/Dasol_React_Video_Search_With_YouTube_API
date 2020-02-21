import React from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      ></VideoItem>
    );
  });

  return <div className="video-list">{renderedList}</div>;
};

export default VideoList;
