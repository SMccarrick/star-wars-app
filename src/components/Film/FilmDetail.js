import React, { Component } from 'react';
import FilmInfo from './FilmInfo';
import CharacterList from './Character/CharacterList';
import PlanetList from './Planets/PlanetList';
import VehicleList from './Vehicles/VehicleList';
import StarshipList from './Starships/StarshipList';
import SpecieList from './Species/SpecieList';
/*

  TODO:

  - Split up into smaller components
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
        <SearchBox type="search" placeholder="search characters" />
        <CharacterList film={film} />
      </div>
    );
  }
}

export default FilmDetail;

const SearchBox = styled.input`
  display: flex;
  align-items: center;
`;
