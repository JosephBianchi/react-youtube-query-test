import React from 'react';

import { SearchBar } from './search_bar';
import { VideoList } from './video_list';
import youtube from '../apis/youtube';

export class App extends React.Component {
  state = {
    videos: []
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get(
    '/search', {
      params: {
        q: term
      }
    })

    this.setState({
      videos: response.data.items
    })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}
