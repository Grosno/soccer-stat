import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'antd';
import { CalendarOutlined, TeamOutlined } from '@ant-design/icons';
import { IState } from '../../types/stateTypes';
import PreLoader from '../../components/pre-loader/PreLoader';
import { loadTeamsByIDAction } from '../../actions/TeamsAction';
import { ITeamsCompetition } from '../../types/apiTypes';
import LoadingError from '../../components/loading-error/LoadingError';
import './Teams.scss';
import TeamsTable from '../../components/teams-table/TeamsTable';

interface IProps {
  competition: ITeamsCompetition;
  isLoading: boolean;
  isLoadingError: boolean;
  loadTeamsByID: (id: string) => void;
}

interface IParams {
  id: string,
}

const Teams = ({
  competition, isLoading, isLoadingError, loadTeamsByID,
}: IProps) => {
  const params = useParams<IParams>();
  const [selectedMenu, setSelectedMenu] = useState('teams');

  useEffect(() => {
    loadTeamsByID(params.id);
  }, []);

  const handleMenuClick = (event: any) => {
    setSelectedMenu(event.key);
  };

  if (isLoadingError) {
    return <LoadingError message="командах выбранной лиги" />;
  }

  return (
    <article className="teams-form">
      <Menu
        className="teams-form__menu"
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
            <h2 className="teams-form__title">{`Футбольные команды. Лига - ${competition.name}`}</h2>
            {isLoading ? <PreLoader /> : <TeamsTable />}
          </div>
        )
        : (<div>Страница календаря лиги</div>)}
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
  }),
)(Teams);
