import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    loading: true,
    noResultsMessage: ''
  };

  componentDidMount() {
    this.onTermSubmit('Iceland Aurora');
  }

  onTermSubmit = async term => {
    this.setState({ loading: true });
    try {
      const response = await youtube.get('/search', {
        params: { q: term }
      });

      if (response.data.items.length > 0) {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0],
          loading: false
        });
      } else {
        this.setState({
          videos: [],
          noResultsMessage: `No results found for '${term}'`,
          loading: true
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    window.scrollTo(0, 0);
  };

  renderContent() {
    if (this.state.videos.length > 0 && this.state.loading === false) {
      return (
        <div>
          <VideoDetail video={this.state.selectedVideo}></VideoDetail>
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          ></VideoList>
        </div>
      );
    }
    if (this.state.videos.length === 0 && this.state.loading === true) {
      return <Spinner message={this.state.noResultsMessage}></Spinner>;
    }
    return <Spinner message="Loading..."></Spinner>;
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onTermSubmit={this.onTermSubmit}></SearchBar>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
