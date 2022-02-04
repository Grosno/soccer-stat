import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'antd';
import { CalendarOutlined, TeamOutlined } from '@ant-design/icons';
import { IState } from '../../types/stateTypes';
import PreLoader from '../../components/pre-loader/PreLoader';
import LoadingError from '../../components/loading-error/LoadingError';
import { loadMatchesByTeamIDAction } from '../../actions/TeamCalendarAction';
import { ITeam } from '../../types/api-types/apiTypes';
import TeamCalendar from '../../components/team-calendar/TeamCalendar';
import './TeamInfo.scss';

interface IProps {
  teams: Array<ITeam>;
  isLoading: boolean;
  isLoadingError: boolean;
  loadMatchesByTeamID: (id: string) => void;
}

interface IParams {
  id: string,
}

const TeamInfo = ({
  teams, isLoading, isLoadingError, loadMatchesByTeamID,
}: IProps) => {
  const params = useParams<IParams>();
  const [selectedMenu, setSelectedMenu] = useState('calendar');

  useEffect(() => {
    loadMatchesByTeamID(params.id);
  }, []);

  const handleMenuClick = (event: any) => {
    setSelectedMenu(event.key);
  };

  if (isLoadingError) {
    return <LoadingError message="команде" />;
  }

  return (
    <article className="team-info-form">
      <Menu
        className="team-info-form__menu"
        mode="horizontal"
        onClick={handleMenuClick}
        selectedKeys={[selectedMenu]}
      >
        <Menu.Item key="calendar" icon={<CalendarOutlined />}>Календарь</Menu.Item>
        <Menu.Item key="line-up" icon={<TeamOutlined />}>Состав команды</Menu.Item>
      </Menu>
      {selectedMenu === 'calendar'
        ? (
          <div>
            <h2 className="team-info-form__title">
              {`Календарь игр команды - ${teams.find((team: ITeam) => team.id.toString() === params.id && team.name)}`}
            </h2>
            {isLoading ? <PreLoader /> : <TeamCalendar />}
          </div>
        )
        : (<div />)}
    </article>
  );
};

export default connect(
  (state: IState) => ({
    teams: state.teams.teams,
    isLoading: state.teamMatches.isLoading,
    isLoadingError: state.teamMatches.isLoadingError,
  }),
  (dispatch) => ({
    loadMatchesByTeamID: bindActionCreators(loadMatchesByTeamIDAction, dispatch),
  }),
)(TeamInfo);
