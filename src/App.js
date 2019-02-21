import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  //Fetches the data from the star wars api
  async componentDidMount(data) {
    try {
      /* const [people, planets, starships] = await Promise.all(
        urls.map(async url => {
          // Fetch each url and assign it to a variable
          const resp = await fetch(url);
          // return the response with json method.
          //return resp.json();
          const json = resp.json();
          // Set State
          this.setState({ data: json })
        })); */

      //Set state out here
      /*this.setState({
        people: json,
        planets: json,
        starships: json
      });*/

      //TODO: Add two other urls such as planets & starships
      //TODO: set the state of both of them and get some output
      //TODO: create categories on the webpage with the information from each of them in.

      const resp = await fetch("https://swapi.co/api/people/");
      const json = await resp.json();
      this.setState({ people: json.results });
    } catch (error) {
      console.log("Oops there was an error!", error);
    }
  }

  render() {
    return (
      <div>
        {this.state.people.map(results => (
          <h3 key={results.height}>Name: {results.name}</h3>
        ))}
      </div>
    );
  }
}

export default App;
