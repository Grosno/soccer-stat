import {
  IGeneralCompetition, ITeamsSeason, ITeam, ICompetition, ICurrentSeason,
} from './api-types/apiTypes';
import { IMatch } from './api-types/matchTypes';
import { ITeamMatch, ITeamSquad } from './api-types/teamInfoTypes';
import { IStanding } from './api-types/leaderboardTypes';

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
  error?: number;
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
  error?: number;
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

export interface ILeagueLeaderboardActionType extends IActionType {
  filters?: object;
  competition?: ICompetition;
  season?: ICurrentSeason;
  standings?: Array<IStanding>;
  isLoading?: boolean;
  isLoadingError?: boolean;
  errorMsg?: string;
  error?: number;
}
