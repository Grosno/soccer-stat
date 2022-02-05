import { Dispatch } from 'redux';
import { getTeamInfo } from '../api-requests/apiRequests';
import { ITeamInfo } from '../types/api-types/teamInfoTypes';
import { ITeamSquadActionType } from '../types/actionTypes';
import {
  HIDE_TEAM_SQUAD_LOADER,
  LOAD_TEAM_SQUAD_ERROR,
  LOAD_TEAM_SQUAD_SUCCESS,
  SHOW_TEAM_SQUAD_LOADER,
} from '../constants/actions/teamSquad';

const showTeamSquadLoader = (): ITeamSquadActionType => ({
  type: SHOW_TEAM_SQUAD_LOADER,
});

const hideTeamSquadLoader = (): ITeamSquadActionType => ({
  type: HIDE_TEAM_SQUAD_LOADER,
});

const loadTeamSquadSuccess = (data: ITeamInfo): ITeamSquadActionType => ({
  type: LOAD_TEAM_SQUAD_SUCCESS,
  squad: data.squad,
  activeCompetitions: data.activeCompetitions,
});
const loadTeamSquadError = (error: string): ITeamSquadActionType => ({
  type: LOAD_TEAM_SQUAD_ERROR,
  errorMsg: error,
});

export const loadTeamSquadByIDAction = (id: string) => (dispatch: Dispatch) => {
  dispatch(showTeamSquadLoader());
  getTeamInfo(id)
    .then((response: ITeamInfo) => dispatch(loadTeamSquadSuccess(response)))
    .catch((error) => dispatch(loadTeamSquadError(error)))
    .finally(() => dispatch(hideTeamSquadLoader()));
};
