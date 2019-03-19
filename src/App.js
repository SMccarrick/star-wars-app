import React from "react";
import {
  BrowserRouter as Router, // Browser Router assigned alias
  Route,
  Switch
} from "react-router-dom";
import FilmList from "./components/FilmList";
import FilmDetail from "./components/FilmDetail";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={FilmList} />
        <Route path="/:id" component={FilmDetail} />
      </Switch>
    </Router>
  );
};

// TODO(1): Fix state and get the data to pass down through to the cardList Component
// TODO(2): Work out a way to have mutiple lists using only one list component
// TODO(3): Link other categories to list
// TODO(4): Add Headings for each category
// TODO(5): Add Scroll component to lists
// TODO(6): Search filter input component(smart component)...
// ADD BELOW: <CardList people />

export default App;
