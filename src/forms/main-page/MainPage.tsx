import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../../types/stateTypes';
import { loadAllCompetitions } from '../../actions/CompetitionsAction';
import { AvailableLeagues } from '../../constants/common';
import LeagueCard from '../../components/league-card/LeagueCard';
import './MainPage.scss';

interface IProps {
  loadCompetitions: () => void;
}

const MainPage = ({
  loadCompetitions,
}: IProps) => {
  useEffect(() => {
    loadCompetitions();
  }, []);

  return (
    <article className="main-page">
      <header className="main-page__header">
        <h1 className="main-page__title">Soccer Stats</h1>
        <p className="main-page__title__desc">Будьте вкурсе результатов футбольных матчей</p>
      </header>
      <ul className="main-page__list">
        {AvailableLeagues.map((league, index) => (
          <li className="main-page__list__item" key={index}>
            <Link to={`/competitions/${league.leagueID}/league`}>
              <LeagueCard
                logoUrl={league.leagueLogo}
                title={league.leagueTitle}
                area={league.leagueArea}
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default connect(
  (state: IState) => ({ state }),
  (dispatch) => ({
    loadCompetitions: bindActionCreators(loadAllCompetitions, dispatch),
  }),
)(MainPage);
