import React from 'react';
import {
  HashRouter, Switch, Route,
} from 'react-router-dom';
import './App.scss';
import Header from './forms/header/Header';
import Competitions from './forms/competitions/Competitions';

const App = () => (
  <HashRouter>
    <div className="container">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/competitions">
            <Competitions />
          </Route>
        </Switch>
      </div>
    </div>
  </HashRouter>
);

export default App;
