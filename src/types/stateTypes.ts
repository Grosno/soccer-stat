import {
  ICompetition, ISeason, ITeam, ITeamsCompetition,
} from './apiTypes';

export interface IState {
  competitions: IAllCompetitionsState;
  pagination: IPaginationState;
  teams: ITeamsState;
}

export interface IAllCompetitionsState {
  competitions: Array<ICompetition>;
  count: number;
  filters: object;
  isLoading: boolean;
  isLoadingError: boolean;
  errorMsg: string;
}

export interface IPaginationState {
  currentPage: number;
  total: number;
  pageSize: number;
}

export interface ITeamsState {
  teams: Array<ITeam>;
  competition: ITeamsCompetition;
  season: ISeason;
  count: number;
  filters: object;
  isLoading: boolean;
  isLoadingError: boolean;
  errorMsg: string;
}
