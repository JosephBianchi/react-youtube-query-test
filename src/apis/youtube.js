import axios from 'axios';

const KEY = 'AIzaSyCpZ_mR_TCw84j9ywwZChsgIYvY6pxQoL0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
