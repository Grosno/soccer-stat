import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../../types/stateTypes';
import { ITeam } from '../../types/api-types/apiTypes';
import { changePaginationAction } from '../../actions/PaginationAction';
import './TeamsTable.scss';
import '../../constants/commonStyles.scss';

interface IProps {
  teams: Array<ITeam>;
}

const TeamsTable = ({ teams }: IProps) => (
  <table className="teams-table table">
    <thead>
      <tr>
        <th className="col-1">Название команды</th>
        <th className="col-2">Год основания</th>
        <th className="col-3">Родной стадион</th>
        <th className="col-4">Веб-сайт</th>
      </tr>
    </thead>
    <tbody>
      {teams.map((team: ITeam, index: number) => (
        <tr key={index}>
          <td className="col-1">
            <img src={team.crestUrl} alt="" />
            <a href={`#/teams/${team.id}/matches`}>{team.name}</a>
          </td>
          <td className="col-2">{team.founded}</td>
          <td className="col-3">{team.venue}</td>
          <td className="col-4">{team.website}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default connect(
  (state: IState) => ({
    teams: state.teams.teams,
  }),
  (dispatch) => ({
    pagination: bindActionCreators(changePaginationAction, dispatch),
  }),
)(TeamsTable);
