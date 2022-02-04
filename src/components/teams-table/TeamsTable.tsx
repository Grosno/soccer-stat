import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IState } from '../../types/stateTypes';
import { ITeam } from '../../types/api-types/apiTypes';
import { changePaginationAction } from '../../actions/PaginationAction';
import './TeamsTable.scss';

interface IProps {
  teams: Array<ITeam>;
}

const TeamsTable = ({ teams }: IProps) => (
  <div>
    <table className="teams-table">
      <tbody>
        <tr>
          <th>Название команды</th>
          <th>Веб-сайт</th>
        </tr>
        {teams.map((team: ITeam, index: number) => (
          <tr className="teams-table__row" onClick={(e) => console.log(e.target)} key={index}>
            <td>
              <img src={team.crestUrl} alt="" />
              <a href={`#/teams/${team.id}/matches`}>{team.name}</a>
            </td>
            <td>{team.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default connect(
  (state: IState) => ({
    teams: state.teams.teams,
  }),
  (dispatch) => ({
    pagination: bindActionCreators(changePaginationAction, dispatch),
  }),
)(TeamsTable);
