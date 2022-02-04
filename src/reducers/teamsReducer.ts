import produce from 'immer';
import { ITeamsState } from '../types/stateTypes';
import { ITeamsActionType } from '../types/actionTypes';
import { ITeamsSeason, ITeam, ICompetition } from '../types/api-types/apiTypes';
import { EMPTY_STRING } from '../constants/common';
import {
  HIDE_TEAMS_LOADER, LOAD_TEAMS_ERROR, LOAD_TEAMS_SUCCESS, SHOW_TEAMS_LOADER,
} from '../constants/actions/teams';

const initialState: ITeamsState = {
  count: 0,
  competition: {} as ICompetition,
  season: {} as ITeamsSeason,
  teams: [],
  isLoading: false,
  isLoadingError: false,
  errorMsg: EMPTY_STRING,
  filters: {},
};

const showTeamsLoader = (draft: ITeamsState) => {
  draft.isLoading = true;
  return draft;
};

const hideTeamsLoader = (draft: ITeamsState) => {
  draft.isLoading = false;
  return draft;
};

const loadingError = (draft: ITeamsState, error?: string) => {
  draft.isLoadingError = true;
  draft.errorMsg = error || EMPTY_STRING;
  return draft;
};

const loadTeams = (draft: ITeamsState, teams?: Array<ITeam>, season?: ITeamsSeason, competition?: ICompetition, count?: number) => {
  draft.teams = teams || [];
  draft.season = season || {} as ITeamsSeason;
  draft.competition = competition || {} as ICompetition;
  draft.count = count || 0;
  draft.isLoadingError = false;
  return draft;
};

export default (state = initialState, action: ITeamsActionType) => produce(
  state,
  (draft: ITeamsState) => {
    switch (action.type) {
      case SHOW_TEAMS_LOADER: return showTeamsLoader(draft);
      case HIDE_TEAMS_LOADER: return hideTeamsLoader(draft);
      case LOAD_TEAMS_SUCCESS: return loadTeams(draft, action.teams, action.season, action.competition, action.count);
      case LOAD_TEAMS_ERROR: return loadingError(draft, action.errorMsg);
      default: return state;
    }
  },
);
