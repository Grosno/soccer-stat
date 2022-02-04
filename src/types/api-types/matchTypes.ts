import { ICompetition, ISeason } from './apiTypes';

export interface IMatches {
  count: number;
  filters: object;
  matches: Array<IMatch>;
}

export interface ICompetitionMatches extends IMatches{
  competition: ICompetition;
}

export interface IMatch {
  id: number;
  season: ISeason;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: string;
  odds: { msg: string };
  score: IMatchScore;
  homeTeam: { id: number, name: string };
  awayTeam: { id: number, name: string };
  referees: Array<IMatchReferee>;
}

interface IMatchScore {
  winner: string;
  duration: string;
  fullTime: IMatchTeams;
  halfTime: IMatchTeams;
  extraTime: IMatchTeams;
  penalties: IMatchTeams;
}

interface IMatchTeams {
  homeTeam: number;
  awayTeam: number;
}

interface IMatchReferee {
  id: number;
  name: string;
  role: string;
  nationality: string;
}
