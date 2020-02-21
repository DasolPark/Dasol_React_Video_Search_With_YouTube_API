import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
  render() {
    const { video } = this.props;

    return (
      <div className="video-item__container">
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
