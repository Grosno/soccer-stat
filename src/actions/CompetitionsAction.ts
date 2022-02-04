import { Dispatch } from 'redux';
import {
  HIDE_COMPETITIONS_LOADER, LOAD_COMPETITIONS_ERROR,
  LOAD_COMPETITIONS_SUCCESS,
  SHOW_COMPETITIONS_LOADER,
} from '../constants/actions/competitions';
import { ICompetitionsActionType } from '../types/actionTypes';
import { getAllCompetitions } from '../api-requests/apiRequests';
import { IAllCompetitions } from '../types/api-types/apiTypes';

const showLoader = (): ICompetitionsActionType => ({
  type: SHOW_COMPETITIONS_LOADER,
});

const hideLoader = (): ICompetitionsActionType => ({
  type: HIDE_COMPETITIONS_LOADER,
});

const loadCompetitionsSuccess = (data: IAllCompetitions): ICompetitionsActionType => ({
  type: LOAD_COMPETITIONS_SUCCESS,
  competitions: data.competitions,
  count: data.count,
});
const loadCompetitionsError = (error: string): ICompetitionsActionType => ({
  type: LOAD_COMPETITIONS_ERROR,
  errorMsg: error,
});

export const loadAllCompetitions = () => (dispatch: Dispatch) => {
  dispatch(showLoader());
  getAllCompetitions()
    .then((response: IAllCompetitions) => dispatch(loadCompetitionsSuccess(response)))
    .catch((error) => dispatch(loadCompetitionsError(error)))
    .finally(() => dispatch(hideLoader()));
};
