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
