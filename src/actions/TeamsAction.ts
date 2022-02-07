import { Dispatch } from 'redux';
import { ITeams } from '../types/api-types/apiTypes';
import {
  HIDE_TEAMS_LOADER, LOAD_TEAMS_ERROR, LOAD_TEAMS_SUCCESS, SHOW_TEAMS_LOADER,
} from '../constants/actions/teams';
import { ITeamsActionType } from '../types/actionTypes';
import { getTeams } from '../api-requests/apiRequests';
import { EMPTY_STRING } from '../constants/common';

const showTeamsLoader = (): ITeamsActionType => ({
  type: SHOW_TEAMS_LOADER,
});

const hideTeamsLoader = (): ITeamsActionType => ({
  type: HIDE_TEAMS_LOADER,
});

const loadTeamsSuccess = (data: ITeams): ITeamsActionType => ({
  type: LOAD_TEAMS_SUCCESS,
  season: data.season,
  teams: data.teams,
  competition: data.competition,
  count: data.count,
});
const loadTeamsError = (error: string): ITeamsActionType => ({
  type: LOAD_TEAMS_ERROR,
  errorMsg: error,
});

export const loadTeamsByIDAction = (id: string) => (dispatch: Dispatch) => {
  dispatch(showTeamsLoader());
  getTeams(id)
    .then((response: ITeams) => (
      JSON.stringify(response).includes('errorCode')
        ? dispatch(loadTeamsError(response.message || EMPTY_STRING))
        : dispatch(loadTeamsSuccess(response))
    ))
    .catch((error) => console.log(error))
    .finally(() => dispatch(hideTeamsLoader()));
};
