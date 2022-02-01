import { ICompetition } from './apiTypes';

export interface IState {
  competitions: IAllCompetitionsState;
}

export interface IAllCompetitionsState {
  competitions: Array<ICompetition>;
  count: number;
  filters: object;
  isLoading: boolean;
  isLoadingError: boolean;
  errorMsg: string;
}
