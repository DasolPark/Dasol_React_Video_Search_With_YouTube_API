import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (video) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div className="ui segment video-detail" style={{ marginTop: '10px' }}>
        <div className="ui embed">
          <iframe src={videoSrc} title="Video player"></iframe>
        </div>
        <h5>{video.snippet.title}</h5>
        <p>{video.snippet.description}</p>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default VideoDetail;
