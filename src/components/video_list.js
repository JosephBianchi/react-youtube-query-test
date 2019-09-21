import React from 'react';

import { VideoItem } from './video_item';

export const VideoList = ({ videos }) => {

  const getVideoItems = videos.map((video) => {
    return (
      <VideoItem video={video}/>
    )
  })

  return (
    <div>
      {getVideoItems}
    </div>
  )
}
