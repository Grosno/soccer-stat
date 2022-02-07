import { Dispatch } from 'redux';
import {
  HIDE_COMPETITIONS_LOADER, LOAD_COMPETITIONS_ERROR,
  LOAD_COMPETITIONS_SUCCESS,
  SHOW_COMPETITIONS_LOADER,
} from '../constants/actions/competitions';
import { ICompetitionsActionType } from '../types/actionTypes';
import { getAllCompetitions } from '../api-requests/apiRequests';
import { IAllCompetitions } from '../types/api-types/apiTypes';
import { EMPTY_STRING, ZERO_VALUE } from '../constants/common';

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
const loadCompetitionsError = (error: number, message: string): ICompetitionsActionType => ({
  type: LOAD_COMPETITIONS_ERROR,
  error,
  errorMsg: message,
});

export const loadAllCompetitions = () => (dispatch: Dispatch) => {
  dispatch(showLoader());
  getAllCompetitions()
    .then((response: IAllCompetitions) => (JSON.stringify(response).includes('error') || JSON.stringify(response).includes('errorCode')
      ? dispatch(loadCompetitionsError(response.error || ZERO_VALUE, response.message || EMPTY_STRING))
      : dispatch(loadCompetitionsSuccess(response))))
    .catch((error) => console.log(error))
    .finally(() => dispatch(hideLoader()));
};
