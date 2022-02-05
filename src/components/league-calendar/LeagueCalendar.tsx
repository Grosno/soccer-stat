import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { IState } from '../../types/stateTypes';
import { IMatch } from '../../types/api-types/matchTypes';
import './LeagueCalendar.scss';

interface IProps {
  matches: Array<IMatch>;
}

const LeagueCalendar = ({ matches }: IProps) => (
  <div>
    <table className="league-calendar">
      <tbody>
        <tr>
          <th>Дата</th>
          <th>Статус</th>
          <th colSpan={3}>Команды</th>
          <th>Счет</th>
        </tr>
        {matches.map((match: IMatch, index: number) => (
          <tr key={index}>
            <td>{moment(match.utcDate).format('DD MMM YYYY')}</td>
            <td>
              <span className={`league-calendar__status_finished ${match.status === 'SCHEDULED' && 'league-calendar__status_scheduled'}`}>
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
    matches: state.matches.matches,
  }),
)(LeagueCalendar);
