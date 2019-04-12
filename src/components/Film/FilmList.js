import React, { Component } from 'react';
import styled from 'styled-components';
import Film from './Film';
import CardGrid from './shared/CardGrid';

class FilmList extends Component {
  constructor(props) {
    super(props);
    // Initialise State
    this.state = {
      films: [],
    };
  }

  // After the component loads fetch data from the API
  async componentDidMount() {
    try {
      // Fetch data from link
      const res = await fetch('https://swapi.co/api/films/');
      // Assign data
      const films = await res.json();
      // Declare State
      this.setState({
        films: films.results,
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  render() {
    const { films } = this.state;
    // Create copy of array using Spread Operator
    const newFilms = [...films];
    // Sort data by release_date.
    newFilms.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    // Loop through array & add IDs incrementing by 1 for each film.
    newFilms.map((film, i) => {
      film.id = i + 1; // The film id equals to the index + 1
      return film;
    });
    // Creates a loader
    return !newFilms.length ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <FilmListHeading>Choose an episode</FilmListHeading>
        <CardGrid>
          {newFilms.map(film => (
            <Film key={film.id} film={film} />
          ))}
        </CardGrid>
      </div>
    );
  }
}

export default FilmList;

const FilmListHeading = styled.h2`
  text-align: center;
`;
