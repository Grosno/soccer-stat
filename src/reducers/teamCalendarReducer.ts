import produce from 'immer';
import { ITeamMatchesState } from '../types/stateTypes';
import { ITeamMatchesActionType } from '../types/actionTypes';
import { EMPTY_STRING } from '../constants/common';
import {
  HIDE_TEAM_CALENDAR_LOADER, LOAD_TEAM_CALENDAR_ERROR,
  LOAD_TEAM_CALENDAR_SUCCESS,
  SHOW_TEAM_CALENDAR_LOADER,
} from '../constants/actions/teamCalendar';
import { ITeamMatch } from '../types/api-types/teamInfoTypes';

const initialState: ITeamMatchesState = {
  count: 0,
  matches: [],
  isLoading: false,
  isLoadingError: false,
  errorMsg: EMPTY_STRING,
  filters: {},
};

const showTeamCalendarLoader = (draft: ITeamMatchesState) => {
  draft.isLoading = true;
  return draft;
};

const hideTeamCalendarLoader = (draft: ITeamMatchesState) => {
  draft.isLoading = false;
  return draft;
};

const loadingError = (draft: ITeamMatchesState, error?: string) => {
  draft.isLoadingError = true;
  draft.errorMsg = error || EMPTY_STRING;
  return draft;
};

const loadTeamMatches = (draft: ITeamMatchesState, matches?: Array<ITeamMatch>, count?: number) => {
  draft.matches = matches || [];
  draft.count = count || 0;
  draft.isLoadingError = false;
  return draft;
};

export default (state = initialState, action: ITeamMatchesActionType) => produce(
  state,
  (draft: ITeamMatchesState) => {
    switch (action.type) {
      case SHOW_TEAM_CALENDAR_LOADER: return showTeamCalendarLoader(draft);
      case HIDE_TEAM_CALENDAR_LOADER: return hideTeamCalendarLoader(draft);
      case LOAD_TEAM_CALENDAR_SUCCESS: return loadTeamMatches(draft, action.matches, action.count);
      case LOAD_TEAM_CALENDAR_ERROR: return loadingError(draft, action.errorMsg);
      default: return state;
    }
  },
);
