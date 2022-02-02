import { ICompetition } from './apiTypes';

export interface IState {
  competitions: IAllCompetitionsState;
  pagination: IPaginationState;
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
