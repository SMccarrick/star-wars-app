import Header from "./components/Header";
import "./App.css";


  // TODO(1): Fix state and get the data to pass down through to the cardList Component
  // TODO(2): Work out a way to have mutiple lists using only one list component
  // TODO(3): Link other categories to list
  // TODO(4): Add Headings for each category
  // TODO(5): Add Scroll component to lists
  // TODO(6): Search filter input component(smart component)...
  // ADD BELOW: <CardList people />
  render() {
    const { people, planets, films } = this.state;
    return (
      <div>
        <Header />
        {people.map(results => (
          <h3 key={results.height}>Name: {results.name}</h3>
        ))}
        {planets.map(results => (
          <h3 key={results.diameter}>Name: {results.name}</h3>
        ))}
        {films.map(results => (
          <h3 key={results.episode_id}>Name: {results.title}</h3>
        ))}
      </div>
    );
  }
}

export default App;
