import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" >
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              className="ui input"
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
              value={this.state.term}
              type="text"
              name="search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
