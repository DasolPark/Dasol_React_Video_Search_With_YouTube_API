import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <div
        className="video-item__container"
        onClick={() => onVideoSelect(video)}
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        ></img>
        <h5 className="header">{video.snippet.title}</h5>
      </div>
    );
  }
}

export default VideoItem;
