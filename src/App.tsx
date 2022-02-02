import React from 'react';
import {
  HashRouter, Switch, Route,
} from 'react-router-dom';
import './App.scss';
import Header from './forms/header/Header';
import Competitions from './forms/competitions/Competitions';
import Paginator from './components/pagination/Paginator';

const App = () => (
  <HashRouter>
    <div className="container">
      <Header />
      <section className="content">
        <Switch>
          <Route exact path="/competitions">
            <Competitions />
            <Paginator />
          </Route>
        </Switch>
      </section>
    </div>
  </HashRouter>
);

export default App;
