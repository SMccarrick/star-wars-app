import React, { Component } from "react";
import Card from "./Card";

class PlanetList extends Component {
  // Set default state of movies to a blank array
  // If the data doesnt come in its just a blank array
  state = {
    planets: []
  };

  // Fetch data from the API
  async componentDidMount() {
    try {
      const res = await fetch("https://swapi.co/api/planets/");
      const planets = await res.json();

      this.setState({
        planets: planets.results
      });
    } catch (e) {
      console.log("error", e);
    }
  }


export default PlanetList;
