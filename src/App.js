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

export default App;
