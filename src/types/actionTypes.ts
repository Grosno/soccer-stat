import {
  ICompetition, ISeason, ITeam, ITeamsCompetition,
} from './apiTypes';

export interface IActionType {
  type: string;
}

export interface ICompetitionsActionType extends IActionType {
  competitions?: Array<ICompetition>;
  count?: number;
  filters?: object;
  isLoading?: boolean;
  isLoadingError?: boolean;
  errorMsg?: string;
}

export interface IPaginationActionType extends IActionType {
  currentPage?: number;
  total?: number;
  pageSize?: number;
}

export interface ITeamsActionType extends IActionType {
  teams?: Array<ITeam>;
  competition?: ITeamsCompetition;
  season?: ISeason;
  count?: number;
  filters?: object;
  isLoading?: boolean;
  isLoadingError?: boolean;
  errorMsg?: string;
}
