import React from 'react';
import axios from 'axios';
import ResultTitle from './ResultTitle';
import cheerio from 'cheerio';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      message: '',
      results: []
    };
  }
  /*
  * Updates the inputText state with the user input
  */
  onTextChange = (event) => {
    this.setState({inputText: event.target.value});
  }
  /*
  * Scarpes google search titles and add them to results state
  */
  onSubmit = (event) => {
    event.preventDefault();
    // Got past CORS with this: https://github.com/messier31/cors-proxy-server
    const query = encodeURIComponent(this.state.inputText);
    const url = 'https://cors-proxy-server.herokuapp.com/https://www.google.com/search?q='+query;

    this.setState({message: 'Loading...'});
    //Get the html from google search using axios
    axios.get(url)
    .then((response) => {
      const $ = cheerio.load(response.data);
      let results = [];
      //Loop through each result item from google, and add it's title to the results array
      $('.r a').each((i,element) => {
        results.push(element.children[0].data);
      });
      //Display an message if there are no results, else update the state with the results
      if(results.length === 0)
        this.setState({message: 'No results found'});
      else  //Sucess
        this.setState({results: results, message: 'Results:'});
    })
    .catch((error) => this.setState({message: "An error occured"}));  //Display an error message if there is any problems
  }
  /*
  * Renders a message to the user
  */
  displayMessage(){
    if(this.state.message){
      return <h3 id="msg">{this.state.message}</h3>;
    }
  }
  /*
  * Renders all of the elements in the results array
  */
  renderResults(){
    if(this.state.results.length > 0){
      return this.state.results.map((item, index) => {
        return <ResultTitle title={item} key={index} />;
      });
    }
  }
  render() {
    return (
      <div>
        <div id="formDiv">
          <h2>Search</h2>
          <form onSubmit={this.onSubmit}>
            <input type="text"  id="search" onChange={this.onTextChange} />
            <input type="submit" id="btn" value="Submit" />
          </form>
        </div>
        {this.displayMessage()}
        <ul>
          {this.renderResults()}
        </ul>
      </div>
    );
  }
}