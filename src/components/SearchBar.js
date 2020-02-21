import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="ui fluid category search">
        <form
          className="ui icon input form"
          onSubmit={this.onFormSubmit}
          style={{ width: '100%' }}
        >
          <input
            className="prompt"
            type="text"
            placeholder="Search Videos..."
            onChange={this.onInputChange}
            value={this.state.term}
          />
          <i className="search icon"></i>
        </form>
        <div className="results"></div>
      </div>
    );
  }
}

export default SearchBar;
