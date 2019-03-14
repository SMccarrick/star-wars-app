import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";


  // Fetches data from the Star Wars API
  async componentDidMount() {
    try {
      // Declare links to Star Wars API
      const urls = [
        "https://swapi.co/api/people/",
        "https://swapi.co/api/planets/",
        "https://swapi.co/api/films/"
      ];

      // Fetched the data accordingly into each category using async awaits syntax
      const [people, planets, films] = await Promise.all(
        urls.map(async url => {
          // Fetch each url and assign it
          const resp = await fetch(url);
          // return the response with json method.
          return resp.json();
        })
      );

      // Declare State for each category then access the results rection in the api json.
      this.setState({
        people: people.results,
        planets: planets.results,
        films: films.results
      });
    } catch (error) {
      // Catches errors within componentDidMount
      console.log("Oops there was an error!", error);
    }
  }

  // TODO(1): Fix state and get the data to pass down through to the cardList Component
  // TODO(2): Work out a way to have mutiple lists using only one list component
  // TODO(3): Link other categories to list
  // TODO(4): Add Headings for each category
  // TODO(5): Add Scroll component to lists
  // TODO(6): Search filter input component(smart component)...
  // ADD BELOW: <CardList people />
  render() {
    const { people, planets, films } = this.state;
    return (
      <div>
        <Header />
        {people.map(results => (
          <h3 key={results.height}>Name: {results.name}</h3>
        ))}
        {planets.map(results => (
          <h3 key={results.diameter}>Name: {results.name}</h3>
        ))}
        {films.map(results => (
          <h3 key={results.episode_id}>Name: {results.title}</h3>
        ))}
      </div>
    );
  }
}

export default App;
