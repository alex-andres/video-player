import React from "react";
import youtube from "./apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  
  componentDidMount(){
    this.onTermSubmit('tiger woods')
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
    console.log(this.state.videos);
  };

  onVideoSelect = video => {
    this.setState({selectedVideo: video});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ten wide column">
            <VideoDetail  video={this.state.selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
