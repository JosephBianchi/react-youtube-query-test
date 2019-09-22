import React from 'react';

import './video_item.css';

export const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.high.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}
