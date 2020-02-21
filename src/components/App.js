import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onTermSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onTermSubmit={this.onTermSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
