import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    // Declare empty arrays for data from each url
    this.state = {
      listPeople: [],
      listPlanets: [],
      listFilms: []
    };
  }

  //Fetches the data from the star wars api
  async componentDidMount() {
    try {

      // COMMENT CODE
      const urls = [
        "https://swapi.co/api/people/",
        "https://swapi.co/api/planets/",
        "https://swapi.co/api/films/"
      ];

      //Set state out here
      /*this.setState({
        people: json,
        planets: json,
        starships: json
      });*/

      //TODO: Add two other urls such as planets & starships -DOne
      //TODO: set the state of both of them and get some output -DONe
      //TODO: create categories on the webpage with the information from each of them in.
      const [people, planets, films] = await Promise.all(
        urls.map(async url => {
          // Fetch each url and assign it to a variable
          const resp = await fetch(url);
          // return the response with json method.
          return resp.json();
        })
      );

      this.setState({
        listPeople: people.results,
        listPlanets: planets.results,
        listFilms: films.results
      });

      /*const resp = await fetch("https://swapi.co/api/people/");
      const json = await resp.json();
      this.setState({ 
        people: json.results
      });*/
    } catch (error) {
      console.log("Oops there was an error!", error);
    }
  }

  render() {
    return (
      <div>
        {this.state.listPeople.map(results => (
          <h3 key={results.height}>Name: {results.name}</h3>
        ))}
        {this.state.listPlanets.map(results => (
          <h3 key={results.diameter}>Name: {results.name}</h3>
        ))}
        {this.state.listFilms.map(results => (
          <h3 key={results.episode_id}>Name: {results.title}</h3>
        ))}
      </div>
    );
  }
}

export default App;
