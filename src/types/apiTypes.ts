// --------------Competitions--------------
export interface IAllCompetitions {
  competitions: Array<ICompetition>;
  count: number;
  filters: object;
}

export interface ICompetition {
  id: number;
  code: string;
  emblemUrl: string;
  lastUpdated: string;
  name: string;
  numberOfAvailableSeasons: number;
  plan: string;
  area: IAreaCompetitionState;
  currentSeason: ICurrentSeason;
}

interface IAreaCompetitionState {
  id: number;
  countryCode: string;
  ensignUrl: string;
  name: string;
}

interface ICurrentSeason {
  id: number;
  currentMatchday: number;
  startDate: string;
  endDate: string;
  winner: string;
}

// --------------Teams by competition ID--------------
export interface ITeams {
  count: number;
  filters: object;
  competition: ITeamsCompetition;
  season: ISeason;
  teams: Array<ITeam>;
}

export interface ITeamsCompetition {
  id: number;
  area: ITeamsArea;
  name: string;
  code: string;
  plan: string;
  lastUpdated: string;
}

export interface ITeam {
  id: number;
  area: ITeamsArea;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}

interface ITeamsArea {
  id: number;
  name: string;
}

export interface ISeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  availableStages: Array<string>;
}
