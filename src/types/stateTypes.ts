import {
  IGeneralCompetition, ITeamsSeason, ITeam, ICompetition,
} from './api-types/apiTypes';
import { IMatch } from './api-types/matchTypes';
import { ITeamMatch, ITeamSquad } from './api-types/teamInfoTypes';

interface ICommonState {
  isLoading: boolean;
  isLoadingError: boolean;
  errorMsg: string;
}

export interface IState {
  competitions: IAllCompetitionsState;
  pagination: IPaginationState;
  teams: ITeamsState;
  matches: IMatchesState;
  teamMatches: ITeamMatchesState;
  teamSquad: ITeamSquadState;
}

export interface IAllCompetitionsState extends ICommonState {
  competitions: Array<IGeneralCompetition>;
  count: number;
  filters: object;
}

export interface IPaginationState {
  currentPage: number;
  total: number;
  pageSize: number;
}

export interface ITeamsState extends ICommonState {
  teams: Array<ITeam>;
  competition: ICompetition;
  season: ITeamsSeason;
  count: number;
  filters: object;
}

export interface IMatchesState extends ICommonState {
  matches: Array<IMatch>;
  competition: ICompetition;
  count: number;
  filters: object;
}

export interface ITeamMatchesState extends ICommonState {
  count: number;
  filters: object;
  matches: Array<ITeamMatch>;
}

export interface ITeamSquadState extends ICommonState {
  activeCompetitions: Array<ICompetition>;
  squad: Array<ITeamSquad>;
}
