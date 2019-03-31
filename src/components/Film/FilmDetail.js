import React, { Component } from 'react';
import FilmInfo from './FilmInfo';
import CharacterList from '../Character/CharacterList';
/*

  TODO:

  - Split up into smaller components
  - Fix colour of card HR
  - Fix keys for characterFetch component
  - Learn how to re-use styled components & react components
  - Add Fetch components for other film information use cards to view theme

*/
class FilmDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
    };
  }

  // Fetch data from the API
  async componentDidMount() {
    const { match } = this.props;
    try {
      const res = await fetch(`https://swapi.co/api/films/${match.params.id}`);
      const film = await res.json();

      this.setState({
        film,
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  render() {
    const { film } = this.state;
    const { title } = film;
    return !title ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <FilmInfo film={film} />
        <CharacterList film={film} />
      </div>
    );
  }
}

export default FilmDetail;
