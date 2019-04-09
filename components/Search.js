import React from 'react';
import twitterService from '../lib/twitter';

class Search extends React.Component {

  state = {
    q: '',
    tweets: [],
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('handlesubmit in react triggered')
    this.handleSearchTweets();
  }

  handleSearchTweets = () => {
    const q = this.state.q;

    twitterService.searchTweets({q})
      .then(tweets => {
        console.log(tweets)
        this.setState({
          tweets
        })
      })
  }

  render () {
    return (
      <div>
        <form>
          <input 
            type="text" 
            placeholder ="search for something"
            name="q"
            value={this.state.q}
            onChange = {this.handleChange}
            onSubmit = {this.handleSubmit} />
            <button className="btn" onClick={this.handleSubmit}>
              Search
            </button>
        </form>

        <div className="tweet-container">
          {this.state.tweets.map((item, key) => (
            <div key={key} className="tweet-item">
              <img 
                className="profile-image"
                src={item.user.profile_image_url_https}
              />
              <p>{item.user.name}</p>
              <a href={`https://twitter.com/${item.user.screen_name}/statuses/${item.id_str}`}>
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Search;