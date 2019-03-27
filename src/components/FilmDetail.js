import React, { Component } from "react";

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
    return (
    return !film.title ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <h1>{film.title}</h1>
        <h1>{film.release_date}</h1>
        <h1>{film.director}</h1>
        <h1>{film.episode_id}</h1>
      </div>
    );
  }
}

export default FilmDetail;
