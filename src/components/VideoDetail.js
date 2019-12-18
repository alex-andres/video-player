import './VideoDetail.css';
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(video);
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <div className="ui embed">
        <iframe
          src={url}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
