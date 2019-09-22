import React from 'react';

import { VideoItem } from './video_item';

export const VideoList = ({ videos, onVideoSelect }) => {

  const getVideoItems = videos.map((video) => {
    return (
      <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    )
  })

  return (
    <div className="ui relaxed divided list">
      {getVideoItems}
    </div>
  )
}
