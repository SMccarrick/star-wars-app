import React from 'react';
import {
  BrowserRouter as Router, // Browser Router assigned alias
  Route,
  Switch,
} from 'react-router-dom';
import FilmList from '../Film/FilmList';
import FilmDetail from '../Film/FilmDetail';
import Header from '../Header/Header';

const Routes = () => {
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

export default Routes;
