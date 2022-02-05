import produce from 'immer';
import { ITeamSquadState } from '../types/stateTypes';
import { ITeamSquadActionType } from '../types/actionTypes';
import { ICompetition } from '../types/api-types/apiTypes';
import { EMPTY_STRING } from '../constants/common';
import {
  HIDE_TEAM_SQUAD_LOADER,
  LOAD_TEAM_SQUAD_ERROR,
  LOAD_TEAM_SQUAD_SUCCESS,
  SHOW_TEAM_SQUAD_LOADER,
} from '../constants/actions/teamSquad';
import { ITeamSquad } from '../types/api-types/teamInfoTypes';

const initialState: ITeamSquadState = {
  squad: [],
  activeCompetitions: [],
  isLoading: false,
  isLoadingError: false,
  errorMsg: EMPTY_STRING,
};

const showTeamSquadLoader = (draft: ITeamSquadState) => {
  draft.isLoading = true;
  return draft;
};

const hideTeamSquadLoader = (draft: ITeamSquadState) => {
  draft.isLoading = false;
  return draft;
};

const loadingError = (draft: ITeamSquadState, error?: string) => {
  draft.isLoadingError = true;
  draft.errorMsg = error || EMPTY_STRING;
  return draft;
};

const loadTeamSquad = (draft: ITeamSquadState, squad?: Array<ITeamSquad>, activeCompetitions?: ICompetition[]) => {
  draft.squad = squad || [];
  draft.activeCompetitions = activeCompetitions || [];
  draft.isLoadingError = false;
  return draft;
};

export default (state = initialState, action: ITeamSquadActionType) => produce(
  state,
  (draft: ITeamSquadState) => {
    switch (action.type) {
      case SHOW_TEAM_SQUAD_LOADER: return showTeamSquadLoader(draft);
      case HIDE_TEAM_SQUAD_LOADER: return hideTeamSquadLoader(draft);
      case LOAD_TEAM_SQUAD_SUCCESS: return loadTeamSquad(draft, action.squad, action.activeCompetitions);
      case LOAD_TEAM_SQUAD_ERROR: return loadingError(draft, action.errorMsg);
      default: return state;
    }
  },
);
