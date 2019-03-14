import React, { Component } from "react";
import Card from "./Card";

class FilmList extends Component {
  // Set default state of movies to a blank array
  // If the data doesnt come in its just a blank array
  state = {
    films: []
  };

  // Fetch data from the API
  async componentDidMount() {
    try {
      const res = await fetch("https://swapi.co/api/films/");
      const films = await res.json();

      this.setState({
        films: films.results
      });
    } catch (e) {
      console.log("error", e);
    }
  }


export default FilmList;
