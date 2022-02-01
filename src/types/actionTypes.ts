import { ICompetition } from './apiTypes';

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
