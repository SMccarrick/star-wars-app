import { Component } from 'react';

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
