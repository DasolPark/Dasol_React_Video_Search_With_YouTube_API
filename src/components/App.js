import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });

    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onTermSubmit={this.onTermSubmit}></SearchBar>
        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        ></VideoList>
      </div>
    );
  }
}

export default App;
