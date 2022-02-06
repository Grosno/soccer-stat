import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'antd';
import { CalendarOutlined, TableOutlined, TeamOutlined } from '@ant-design/icons';
import { IState } from '../../types/stateTypes';
import { loadTeamsByIDAction } from '../../actions/TeamsAction';
import { ICompetition } from '../../types/api-types/apiTypes';
import LoadingError from '../../components/loading-error/LoadingError';
import './LeagueInfo.scss';
import TeamsTable from '../../components/teams-table/TeamsTable';
import LeagueCalendar from '../../components/league-calendar/LeagueCalendar';
import { loadMatchesByIDAction } from '../../actions/LeagueCalendarAction';
import LeagueLeaderboard from '../../components/league-leaderboard/LeagueLeaderboard';
import { loadLeagueLeaderboardAction } from '../../actions/LeagueLeaderboardAction';

interface IProps {
  competition: ICompetition;
  isLoadingError: boolean;
  loadTeamsByID: (id: string) => void;
  loadMatchesByID: (id: string) => void;
  loadLeagueLeaderboardByID: (id: string) => void;
}

interface IParams {
  id: string,
}

const LeagueInfo = ({
  competition, isLoadingError, loadTeamsByID, loadMatchesByID, loadLeagueLeaderboardByID,
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

  if (isLoadingError) {
    return <LoadingError message="командах выбранной лиги" />;
  }

  return (
    <article className="league-info-form">
      <Menu
        className="league-info-form__menu"
        mode="horizontal"
        onClick={handleMenuClick}
        selectedKeys={[selectedMenu]}
      >
        <Menu.Item key="teams" icon={<TeamOutlined />}>Инфо</Menu.Item>
        <Menu.Item key="leaderboard" icon={<TableOutlined />}>Турнирная таблица</Menu.Item>
        <Menu.Item key="calendar" icon={<CalendarOutlined />}>Календарь</Menu.Item>
      </Menu>
      {renderComponent(selectedMenu)}
    </article>
  );
};

export default connect(
  (state: IState) => ({
    competition: state.teams.competition,
    isLoadingError: state.teams.isLoadingError,
  }),
  (dispatch) => ({
    loadTeamsByID: bindActionCreators(loadTeamsByIDAction, dispatch),
    loadMatchesByID: bindActionCreators(loadMatchesByIDAction, dispatch),
    loadLeagueLeaderboardByID: bindActionCreators(loadLeagueLeaderboardAction, dispatch),
  }),
)(LeagueInfo);
