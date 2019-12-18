import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  return(
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <div className="image">
        <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
      </div>
      <div className="content">
        <p className="header">{video.snippet.title}</p>
        <div className="extra">
          {video.snippet.channelTitle}
        </div>
      </div>
    </div>
  )
}

export default VideoItem;