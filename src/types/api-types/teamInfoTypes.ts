import { ICompetition, ITeam } from './apiTypes';
import { IMatch } from './matchTypes';

export interface ITeamInfo extends ITeam {
  activeCompetitions: Array<ICompetition>;
  squad: Array<ITeamSquad>;
}

export interface ITeamMatches {
  count: number;
  filters: object;
  matches: Array<ITeamMatch>;
}
export interface ITeamMatch extends IMatch {
  competition: ITeamMatchCompetition;
}

export interface ITeamSquad {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  role: string;
}

interface ITeamMatchCompetition {
  id: number;
  name: string;
  area: ITeamMatchArea;
}

interface ITeamMatchArea {
  name: string;
  code: string;
  ensignUrl: string;
}
