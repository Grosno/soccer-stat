import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { IState } from '../../types/stateTypes';
import { ITeamMatch } from '../../types/api-types/teamInfoTypes';
import './TeamCalendar.scss';

interface IProps {
  teamMatches: Array<ITeamMatch>;
}

const TeamCalendar = ({ teamMatches }: IProps) => (
  <div>
    <table className="team-calendar">
      <tbody>
        <tr>
          <th>Дата</th>
          <th>Статус</th>
          <th colSpan={3}>Команды</th>
          <th>Счет</th>
        </tr>
        {teamMatches.map((match: ITeamMatch, index: number) => (
          <tr key={index}>
            <td>{moment(match.utcDate).format('DD MMM YYYY')}</td>
            <td>
              <span className={`team-calendar__status_finished ${match.status === 'SCHEDULED' && 'team-calendar__status_scheduled'}`}>
                {match.status}
              </span>
            </td>
            <td>{match.homeTeam.name}</td>
            <td>vs</td>
            <td>{match.awayTeam.name}</td>
            <td>
              {match.score.fullTime.homeTeam === null
                ? '-'
                : `${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default connect(
  (state: IState) => ({
    teamMatches: state.teamMatches.matches,
  }),
)(TeamCalendar);
