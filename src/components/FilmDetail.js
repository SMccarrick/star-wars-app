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
