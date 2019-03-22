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
    const { films } = this.state;
    films.sort((a, b) => a.episode_id - b.episode_id);
    this.setState({
      films
    });
  }

  render() {
    const { films } = this.state;
    return (
      <div>
        <button type="button" onClick={this.sortListAscending}>
          asc
        </button>
        <FilmGrid>
          {films.map(film => (
            <Film key={film.episode_id} film={film} />
          ))}
        </FilmGrid>
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
