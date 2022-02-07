import { ICompetition, ICurrentSeason } from './apiTypes';

export interface ILeaderboard {
  filters: object;
  competition: ICompetition;
  season: ICurrentSeason;
  standings: Array<IStanding>;
  error?: number;
  message?: string;
}

export interface IStanding {
  stage: string;
  type: string;
  group: string;
  table: Array<IStandingTable>;
}

export interface IStandingTable {
  position: number;
  team: ILeaderboardTeam;
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

interface ILeaderboardTeam {
  id: number;
  name: string;
  crestUrl: string;
}
