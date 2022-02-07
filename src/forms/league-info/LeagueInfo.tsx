import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'antd';
import { CalendarOutlined, TableOutlined, TeamOutlined } from '@ant-design/icons';
import { IState } from '../../types/stateTypes';
import { loadTeamsByIDAction } from '../../actions/TeamsAction';
import { ICompetition } from '../../types/api-types/apiTypes';
import './LeagueInfo.scss';
import TeamsTable from '../../components/teams-table/TeamsTable';
import LeagueCalendar from '../../components/league-calendar/LeagueCalendar';
import { loadMatchesByIDAction } from '../../actions/LeagueCalendarAction';
import LeagueLeaderboard from '../../components/league-leaderboard/LeagueLeaderboard';
import { loadLeagueLeaderboardAction } from '../../actions/LeagueLeaderboardAction';
import PreLoader from '../../components/pre-loader/PreLoader';

interface IProps {
  competition: ICompetition;
  isTeamsLoading: boolean;
  isTeamsLoadingError: boolean;
  isStandingLoadingError: boolean;
  errorMsg: string;
  loadTeamsByID: (id: string) => void;
  loadMatchesByID: (id: string) => void;
  loadLeagueLeaderboardByID: (id: string) => void;
}

interface IParams {
  id: string,
}

const LeagueInfo = ({
  competition, isTeamsLoading, isTeamsLoadingError, isStandingLoadingError,
  errorMsg, loadTeamsByID, loadMatchesByID, loadLeagueLeaderboardByID,
}: IProps) => {
  const params = useParams<IParams>();
  const [selectedMenu, setSelectedMenu] = useState('teams');

  useEffect(() => {
    loadLeagueLeaderboardByID(params.id);
    loadTeamsByID(params.id);
    loadMatchesByID(params.id);
  }, []);

  const handleMenuClick = (event: any) => {
    setSelectedMenu(event.key);
  };

  const renderComponent = (param: string) => {
    switch (param) {
      case 'calendar': return (
        <div>
          <h2 className="league-info-form__title">{`Календарь игр всех команд. ${competition.name}`}</h2>
          <LeagueCalendar />
        </div>
      );
      case 'teams': return (
        <div>
          <h2 className="league-info-form__title">{`Футбольные команды. ${competition.name}`}</h2>
          <TeamsTable />
        </div>
      );
      default: return (
        <div>
          <h2 className="league-info-form__title">{`Турнирная таблица. ${competition.name}`}</h2>
          <LeagueLeaderboard />
        </div>
      );
    }
  };

  return (
    <article className="league-info-form">
      {/* eslint-disable-next-line no-nested-ternary */}
      {isTeamsLoadingError
        ? (
          <div>
            <Menu
              className="league-info-form__menu"
              mode="horizontal"
              disabled
            >
              <Menu.Item key="teams" icon={<TeamOutlined />}>Инфо</Menu.Item>
              <Menu.Item key="leaderboard" icon={<TableOutlined />}>Турнирная таблица</Menu.Item>
              <Menu.Item key="calendar" icon={<CalendarOutlined />}>Календарь</Menu.Item>
            </Menu>
            <p>{errorMsg}</p>
          </div>
        )
        : isTeamsLoading ? <PreLoader /> : (
          <div>
            <Menu
              className="league-info-form__menu"
              mode="horizontal"
              onClick={handleMenuClick}
              selectedKeys={[selectedMenu]}
            >
              <Menu.Item key="teams" icon={<TeamOutlined />}>Инфо</Menu.Item>
              <Menu.Item disabled={isStandingLoadingError} key="leaderboard" icon={<TableOutlined />}>Турнирная таблица</Menu.Item>
              <Menu.Item key="calendar" icon={<CalendarOutlined />}>Календарь</Menu.Item>
            </Menu>
            {renderComponent(selectedMenu)}
          </div>
        )}
    </article>
  );
};

export default connect(
  (state: IState) => ({
    competition: state.teams.competition,
    isTeamsLoading: state.teams.isLoading,
    isTeamsLoadingError: state.teams.isLoadingError,
    isStandingLoadingError: state.leagueLeaderboard.isLoadingError,
    errorMsg: state.teams.errorMsg,
  }),
  (dispatch) => ({
    loadTeamsByID: bindActionCreators(loadTeamsByIDAction, dispatch),
    loadMatchesByID: bindActionCreators(loadMatchesByIDAction, dispatch),
    loadLeagueLeaderboardByID: bindActionCreators(loadLeagueLeaderboardAction, dispatch),
  }),
)(LeagueInfo);
