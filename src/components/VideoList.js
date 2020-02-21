import React from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} key={video.id.videoId}></VideoItem>;
  });

  return <div className="video-list">{renderedList}</div>;
};

export default VideoList;
