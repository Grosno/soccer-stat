import produce from 'immer';
import { IAllCompetitionsState } from '../types/stateTypes';
import { ICompetitionsActionType } from '../types/actionTypes';
import {
  HIDE_COMPETITIONS_LOADER, LOAD_COMPETITIONS_ERROR,
  LOAD_COMPETITIONS_SUCCESS,
  SHOW_COMPETITIONS_LOADER,
} from '../constants/actions/competitions';
import { IGeneralCompetition } from '../types/api-types/apiTypes';
import { EMPTY_STRING, ZERO_VALUE } from '../constants/common';

const initialState: IAllCompetitionsState = {
  competitions: [],
  count: 0,
  isLoading: false,
  isLoadingError: false,
  errorMsg: EMPTY_STRING,
  error: ZERO_VALUE,
  filters: {},
};

const showLoader = (draft: IAllCompetitionsState) => {
  draft.isLoading = true;
  return draft;
};

const hideLoader = (draft: IAllCompetitionsState) => {
  draft.isLoading = false;
  return draft;
};

const loadingError = (draft: IAllCompetitionsState, error?: number, message?: string) => {
  draft.isLoadingError = true;
  draft.errorMsg = message || EMPTY_STRING;
  draft.error = error || ZERO_VALUE;
  return draft;
};

const loadCompetitions = (draft: IAllCompetitionsState, competitions?: Array<IGeneralCompetition>, count?: number) => {
  draft.competitions = competitions || [];
  draft.count = count || 0;
  draft.isLoadingError = false;
  return draft;
};

export default (state = initialState, action: ICompetitionsActionType) => produce(
  state,
  (draft: IAllCompetitionsState) => {
    switch (action.type) {
      case SHOW_COMPETITIONS_LOADER: return showLoader(draft);
      case HIDE_COMPETITIONS_LOADER: return hideLoader(draft);
      case LOAD_COMPETITIONS_SUCCESS: return loadCompetitions(draft, action.competitions, action.count);
      case LOAD_COMPETITIONS_ERROR: return loadingError(draft, action.error, action.errorMsg);
      default: return state;
    }
  },
);
