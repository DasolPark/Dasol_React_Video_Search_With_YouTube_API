import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });

    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onTermSubmit={this.onTermSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
