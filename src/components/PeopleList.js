import React, { Component } from "react";
import Card from "./Card";

class PeopleList extends Component {
  // Set default state of movies to a blank array
  // If the data doesnt come in its just a blank array
  state = {
    people: []
  };

  // Fetch data from the API
  async componentDidMount() {
    try {
      const res = await fetch("https://swapi.co/api/people/");
      const people = await res.json();

      this.setState({
        people: people.results
      });
    } catch (e) {
      console.log("error", e);
    }
  }


export default PeopleList;
