import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'antd';
import { CalendarOutlined, TeamOutlined } from '@ant-design/icons';
import { IState } from '../../types/stateTypes';
import PreLoader from '../../components/pre-loader/PreLoader';
import { loadTeamsByIDAction } from '../../actions/TeamsAction';
import { ICompetition } from '../../types/api-types/apiTypes';
import LoadingError from '../../components/loading-error/LoadingError';
import './LeagueInfo.scss';
import TeamsTable from '../../components/teams-table/TeamsTable';
import LeagueCalendar from '../../components/league-calendar/LeagueCalendar';
import { loadMatchesByIDAction } from '../../actions/LeagueCalendarAction';

interface IProps {
  competition: ICompetition;
  isLoading: boolean;
  isLoadingError: boolean;
  loadTeamsByID: (id: string) => void;
  loadMatchesByID: (id: string) => void;
}

interface IParams {
  id: string,
}

const LeagueInfo = ({
  competition, isLoading, isLoadingError, loadTeamsByID, loadMatchesByID,
}: IProps) => {
  const params = useParams<IParams>();
  const [selectedMenu, setSelectedMenu] = useState('teams');

  useEffect(() => {
    loadTeamsByID(params.id);
    loadMatchesByID(params.id);
  }, []);

  const handleMenuClick = (event: any) => {
    setSelectedMenu(event.key);
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
        <Menu.Item key="teams" icon={<TeamOutlined />}>Команды</Menu.Item>
        <Menu.Item key="calendar" icon={<CalendarOutlined />}>Календарь</Menu.Item>
      </Menu>
      {selectedMenu === 'teams'
        ? (
          <div>
            <h2 className="league-info-form__title">{`Футбольные команды. Лига - ${competition.name}`}</h2>
            {isLoading ? <PreLoader /> : <TeamsTable />}
          </div>
        )
        : (<LeagueCalendar />)}
    </article>
  );
};

export default connect(
  (state: IState) => ({
    competition: state.teams.competition,
    isLoading: state.teams.isLoading,
    isLoadingError: state.teams.isLoadingError,
  }),
  (dispatch) => ({
    loadTeamsByID: bindActionCreators(loadTeamsByIDAction, dispatch),
    loadMatchesByID: bindActionCreators(loadMatchesByIDAction, dispatch),
  }),
)(LeagueInfo);
