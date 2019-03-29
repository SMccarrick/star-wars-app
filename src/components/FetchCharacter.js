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

  async componentDidMount() {
    const { url } = this.props;
    try {
      const res = await fetch(url);
      const data = await res.json();

      this.setState({
        loading: false,
        data,
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  render() {
    const { children } = this.props;
    const { loading, data } = this.state;
    return children({
      loading,
      data,
    });
  }
}

export default FetchCharacter;
