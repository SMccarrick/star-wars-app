import React, { Component } from "react";
import styled from "styled-components";
import Film from "./Film";

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
    this.addFilmIds = this.addFilmIds.bind(this);
  }

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

  sortListAscending() {
  // Used this function to put the episodes in order to test if I could fix the links.
  addFilmIds() {
    /*
      TODO:
      1. Create a copy of array[x]
      2. Sort array by release Date[done]
      3. Assign IDs to each object that match url parameters
          - Params are 1,2,3,4,5,6,7
          - My Film IDs must match the above order for each film object
      4. Refresh the state.
     */
    const { films } = this.state;
    // Create copy of array using Spread Operator
    const newFilms = [...films];
    // Sort data by release_date.
    newFilms.sort(
      (a, b) => new Date(a.release_date) - new Date(b.release_date)
    );
    this.setState({
      films
    });
  }

  render() {
    const { films } = this.state;
    return (
      <div>
        <div>
          <button type="button" onClick={this.addFilmIds}>
            Test
          </button>
        </div>
        <div>
          <FilmGrid>
            {films.map(film => (
              <Film key={film.id} film={film} />
            ))}
          </FilmGrid>
        </div>
      </div>
    );
  }
}

export default FilmList;

const FilmGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
`;
