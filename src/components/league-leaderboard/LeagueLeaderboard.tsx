import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../types/stateTypes';
import { IStanding, IStandingTable } from '../../types/api-types/leaderboardTypes';
import './LeagueLeaderboard.scss';
import '../../constants/commonStyles.scss';

interface IProps {
  standings: Array<IStanding>;
}

const LeagueLeaderboard = ({ standings }: IProps) => (
  <table className="league-leaderboard table">
    <thead>
      <tr>
        <th className="col-1">№</th>
        <th className="col-2">Команда</th>
        <th className="col-3">И</th>
        <th className="col-4">В</th>
        <th className="col-5">Н</th>
        <th className="col-6">П</th>
        <th className="col-7">Мячи</th>
        <th className="col-8">Очки</th>
      </tr>
    </thead>
    <tbody>
      {standings[0].table.map((team: IStandingTable, index: number) => (
        <tr key={index}>
          <td className="col-1">{index + 1}</td>
          <td className="col-2">
            <img src={team.team.crestUrl} alt="" />
            <a href={`#/teams/${team.team.id}/matches`}>{team.team.name}</a>
          </td>
          <td className="col-3">{team.playedGames}</td>
          <td className="col-4">{team.won}</td>
          <td className="col-5">{team.draw}</td>
          <td className="col-6">{team.lost}</td>
          <td className="col-7">{`${team.goalsFor} - ${team.goalsAgainst}`}</td>
          <td className="col-8">{team.points}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default connect(
  (state: IState) => ({
    standings: state.leagueLeaderboard.standings,
  }),
)(LeagueLeaderboard);
