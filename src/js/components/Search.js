import React from 'react';
import axios from 'axios';
import ResultTitle from './ResultTitle';
const cheerio = require('cheerio');

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      message: '',
      results: []
    };
  }
  onTextChange = (event) => {
    this.setState({inputText: event.target.value});
  }
  onSubmit = (event) => {
    event.preventDefault();
    // Got past CORS with this: https://github.com/messier31/cors-proxy-server
    const query = encodeURIComponent(this.state.inputText);
    const url = 'https://secret-ocean-49799.herokuapp.com/https://www.google.com/search?q='+query;

    this.setState({message: 'Loading...'});
    axios.get(url)
    .then((response) => {
      const $ = cheerio.load(response.data);
      let results = [];
      $('.r').each((i,element) => {
        results.push(element.children[0].children[0].data);
      });
      this.setState({results: results, message: ''});
    })
    .catch((error) => this.setState({message: "An error occured"}));
  }
  displayMessage(){
    if(this.state.message){
      return <h3>{this.state.message}</h3>;
    }
  }
  renderResults(){
    if(this.state.results.length > 0){
      console.log(this.state.results);
      return this.state.results.map((item, index) => {
        return <ResultTitle title={item} key={index} />;
      });//*/
    }
  }
  render() {
    return (
      <div>
        <h2>Search</h2>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onTextChange} />
          <input type="submit" value="Submit" />
        </form>
        {this.displayMessage()}
        {this.renderResults()}
      </div>
    );
  }
}