import React, { Component } from 'react';
import FilmInfo from './FilmInfo';
import FetchCharacter from './FetchCharacter';

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
        <div>
          <h1>Characters</h1>
          {film.characters.map(character => (
            <FetchCharacter url={character}>
              {({ loading, data }) => (loading ? <p>Loading character...</p> : <p>{data.name}</p>)}
            </FetchCharacter>
          ))}
        </div>
      </div>
    );
  }
}

export default FilmDetail;
