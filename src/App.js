import React from "react";
import {
  BrowserRouter as Router, // Browser Router assigned alias
  Route,
  Switch
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FilmList from "./components/FilmList";
import FilmDetail from "./components/FilmDetail";
import Header from "./components/Header";
import "./App.css";
import theme from "./theme";

/*

  Below I've created a swtich with two routes

  - First will always show the film list at :root
  - Second will use the ID from filmDetail to display information dynamically.

*/

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path="/" component={FilmList} />
          <Route path="/:id" component={FilmDetail} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
