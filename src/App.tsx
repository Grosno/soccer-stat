import React from 'react';
import {
  HashRouter, Switch, Route,
} from 'react-router-dom';
import './App.scss';
import Header from './forms/header/Header';
import Competitions from './forms/competitions/Competitions';
import Paginator from './components/pagination/Paginator';
import LeagueInfo from './forms/league-info/LeagueInfo';
import TeamInfo from './forms/team-info/TeamInfo';

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
          <Route exact path="/competitions/:id/teams">
            <LeagueInfo />
          </Route>
          <Route exact path="/teams/:id/matches">
            <TeamInfo />
          </Route>
        </Switch>
      </section>
      {/* <Redirect to={COMPETITION_PATH} /> */}
    </div>
  </HashRouter>
);

export default App;
