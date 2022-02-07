import React from 'react';
import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import './App.scss';
import Header from './forms/header/Header';
import Competitions from './forms/competitions/Competitions';
import Paginator from './components/pagination/Paginator';
import LeagueInfo from './forms/league-info/LeagueInfo';
import TeamInfo from './forms/team-info/TeamInfo';
import MainPage from './forms/main-page/MainPage';
import ErrorForm from './forms/error-form/ErrorForm';

const App = () => (
  <HashRouter>
    <div className="container">
      <Header />
      <section className="content">
        <Switch>
          <Route exact path="/main">
            <MainPage />
          </Route>
          <Route exact path="/competitions">
            <Competitions />
            <Paginator />
          </Route>
          <Route exact path="/competitions/:id/league">
            <LeagueInfo />
          </Route>
          <Route exact path="/teams/:id/matches">
            <TeamInfo />
          </Route>
          <Route exact path="/teams/:id">
            <TeamInfo />
          </Route>
          <Route exact path="/error">
            <ErrorForm />
          </Route>
        </Switch>
      </section>
      <Redirect to="/main" />
    </div>
  </HashRouter>
);

export default App;
