import React, { Component } from 'react';
import FetchCharacter from './FetchCharacter';

class FilmDetail extends Component {
  state = {
    film: []
  };

  // Fetch data from the API
  async componentDidMount() {
    const { match } = this.props;
    try {
      const res = await fetch(`https://swapi.co/api/films/${match.params.id}`);
      const film = await res.json();

      this.setState({
        film
      });
    } catch (e) {
      console.log("error", e);
    }
  }

  render() {
    const { film } = this.state;
    const { title, release_date, director, episode_id } = film;
    return !film.title ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <h1>{release_date}</h1>
          <h1>{director}</h1>
          <h1>{episode_id}</h1>
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
