import { Component } from 'react';
// Fetch data from the API
/* async componentDidMount() {
  try {
    const res = await fetch('https://swapi.co/api/people/');
    const people = await res.json();

    this.setState({
      characters: character,
    });
  } catch (e) {
    console.log('error', e);
  }
} */

class FetchCharacter extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: null,
    };
  }

export default FetchCharacter;
