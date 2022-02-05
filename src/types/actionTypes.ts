import {
  IGeneralCompetition, ITeamsSeason, ITeam, ICompetition,
} from './api-types/apiTypes';
import { IMatch } from './api-types/matchTypes';
import { ITeamMatch, ITeamSquad } from './api-types/teamInfoTypes';

export interface IActionType {
  type: string;
}

export interface ICompetitionsActionType extends IActionType {
  competitions?: Array<IGeneralCompetition>;
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
  competition?: ICompetition;
  season?: ITeamsSeason;
  count?: number;
  filters?: object;
  isLoading?: boolean;
  isLoadingError?: boolean;
  errorMsg?: string;
}

export interface IMatchesActionType extends IActionType {
  matches?: Array<IMatch>;
  competition?: ICompetition;
  count?: number;
  filters?: object;
  isLoading?: boolean;
  isLoadingError?: boolean;
  errorMsg?: string;
}

export interface ITeamMatchesActionType extends IActionType {
  count?: number;
  filters?: object;
  matches?: Array<ITeamMatch>;
  isLoading?: boolean;
  isLoadingError?: boolean;
  errorMsg?: string;
}

export interface ITeamSquadActionType extends IActionType {
  activeCompetitions?: Array<ICompetition>;
  squad?: Array<ITeamSquad>;
  isLoading?: boolean;
  isLoadingError?: boolean;
  errorMsg?: string;
}
