import axios from 'axios';
import qs from 'query-string';

class twitterService {

  static searchTweets(params) {
    console.log('twitter service searchTweets', params)
    
    const options = {
      url: `/tweets?${qs.stringify(params)}`,
      method: 'GET',
    };

    return axios(options).then(res => res.data.items)
  }
}

export default twitterService


