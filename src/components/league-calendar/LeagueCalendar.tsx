import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { IState } from '../../types/stateTypes';
import { IMatch } from '../../types/api-types/matchTypes';
import './LeagueCalendar.scss';
import { EMPTY_VALUE, GameStatus } from '../../constants/common';

interface IProps {
  matches: Array<IMatch>;
}

const LeagueCalendar = ({ matches }: IProps) => {
  const renderStatus = (status: string) => {
    switch (status) {
      case 'FINISHED': return (
        <span className="league-calendar__status_finished">
          {GameStatus.FINISHED}
        </span>
      );
      case 'POSTPONED': return (
        <span className="league-calendar__status_postponed">
          {GameStatus.POSTPONED}
        </span>
      );
      case 'SCHEDULED': return (
        <span className="league-calendar__status_scheduled">
          {GameStatus.SCHEDULED}
        </span>
      );
      default: return <span>{EMPTY_VALUE}</span>;
    }
  };

  return (
    <table className="league-calendar table">
      <tbody>
        <tr>
          <th className="col-1">Дата</th>
          <th className="col-2">Статус</th>
          <th colSpan={3}>Команды</th>
          <th className="col-6">Счет</th>
        </tr>
        {matches.map((match: IMatch, index: number) => (
          <tr key={index}>
            <td className="col-1">{moment(match.utcDate).format('DD MMM YYYY')}</td>
            <td className="col-2">
              {renderStatus(match.status)}
            </td>
            <td className="col-3">{match.homeTeam.name}</td>
            <td className="col-4">vs</td>
            <td className="col-5">{match.awayTeam.name}</td>
            <td className="col-6">
              {match.score.fullTime.homeTeam === null
                ? '-'
                : `${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default connect(
  (state: IState) => ({
    matches: state.matches.matches,
  }),
)(LeagueCalendar);
