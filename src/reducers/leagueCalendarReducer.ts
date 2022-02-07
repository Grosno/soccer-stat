import produce from 'immer';
import { IMatchesState } from '../types/stateTypes';
import { IMatchesActionType } from '../types/actionTypes';
import { ICompetition } from '../types/api-types/apiTypes';
import { EMPTY_STRING, ZERO_VALUE } from '../constants/common';
import { LOAD_MATCHES_ERROR, LOAD_MATCHES_SUCCESS } from '../constants/actions/leagueCalendar';
import { IMatch } from '../types/api-types/matchTypes';

const initialState: IMatchesState = {
  count: 0,
  competition: {} as ICompetition,
  matches: [],
  isLoading: false,
  isLoadingError: false,
  error: ZERO_VALUE,
  errorMsg: EMPTY_STRING,
  filters: {},
};

const loadingError = (draft: IMatchesState, error?: string) => {
  draft.isLoadingError = true;
  draft.errorMsg = error || EMPTY_STRING;
  return draft;
};

const loadMatches = (draft: IMatchesState, matches?: Array<IMatch>, competition?: ICompetition, count?: number) => {
  draft.matches = matches || [];
  draft.competition = competition || {} as ICompetition;
  draft.count = count || 0;
  draft.isLoadingError = false;
  return draft;
};

export default (state = initialState, action: IMatchesActionType) => produce(
  state,
  (draft: IMatchesState) => {
    switch (action.type) {
      case LOAD_MATCHES_SUCCESS: return loadMatches(draft, action.matches, action.competition, action.count);
      case LOAD_MATCHES_ERROR: return loadingError(draft, action.errorMsg);
      default: return state;
    }
  },
);
