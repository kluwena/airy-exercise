import { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  state = {
    query: ''
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,
    })
    // let reqData = {
    //   data: {
    //     query: 'manado',
    //   }
    // }
    let data = {
      'query': 'manado',
    }

    let config = {
      "application":"airyrooms",
      'apiKey':'airy.airyrooms.ieneeSh4',
      'apiToken':'airy.airyrooms.token.tahs1thee1hae2Do',
      headers : {
        'Access-Control-Allow-Origin': '*',
        'Content-Type' : 'application/json',
      }
    } 
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type' : 'application/json',      
    }

    axios({
      method: 'post',
      url: 'https://api.airyrooms.com/api/v2/search/autocomplete',
      data: {
        query: 'manado'
      },
      // apiKey: 'airy.airyrooms.ieneeSh4',
      // apiToken: 'airy.airyrooms.token.tahs1thee1hae2Do',
      headers : {
        'Access-Control-Allow-Origin': '*',
        'Content-Type' : 'application/json',
      },
    })
      .then(res => {
        console.log(res.data)
      })
    // axios.post('https://api.airyrooms.com/api/v2/search/autocomplete', data, headers)
    //   .then(res => {
    //     console.log(res.data)
    //   })
    // axios.get('https://jsonplaceholder.typicode.com/users/1', {headers: headers})
    //   .then(res => {
    //     console.log(res.data);
    //   })
    
  }

  handleInputSubmit = () => {

  }

  render () {
    return (
      <div>
        <form>
          <input 
            type="text" 
            placeholder ="Di mana anda akan menginap"
            ref = {input => this.search = input}
            onChange = {this.handleInputChange}
            onSubmit = {this.handleInputSubmit} />
        </form>
        <p>{this.state.query}</p>
      </div>
    )
  }
}

export default Search;