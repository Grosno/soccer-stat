import { Dispatch } from 'redux';
import { ITeamMatchesActionType } from '../types/actionTypes';
import {
  HIDE_TEAM_CALENDAR_LOADER, LOAD_TEAM_CALENDAR_ERROR,
  LOAD_TEAM_CALENDAR_SUCCESS,
  SHOW_TEAM_CALENDAR_LOADER,
} from '../constants/actions/teamCalendar';
import { getTeamMatches } from '../api-requests/apiRequests';
import { ITeamMatches } from '../types/api-types/teamInfoTypes';

const showTeamCalendarLoader = (): ITeamMatchesActionType => ({
  type: SHOW_TEAM_CALENDAR_LOADER,
});

const hideTeamCalendarLoader = (): ITeamMatchesActionType => ({
  type: HIDE_TEAM_CALENDAR_LOADER,
});

const loadTeamCalendarSuccess = (data: ITeamMatches): ITeamMatchesActionType => ({
  type: LOAD_TEAM_CALENDAR_SUCCESS,
  count: data.count,
  matches: data.matches,
});
const loadTeamCalendarError = (error: string): ITeamMatchesActionType => ({
  type: LOAD_TEAM_CALENDAR_ERROR,
  errorMsg: error,
});

export const loadMatchesByTeamIDAction = (id: string) => (dispatch: Dispatch) => {
  dispatch(showTeamCalendarLoader());
  getTeamMatches(id)
    .then((response: ITeamMatches) => dispatch(loadTeamCalendarSuccess(response)))
    .catch((error) => dispatch(loadTeamCalendarError(error)))
    .finally(() => dispatch(hideTeamCalendarLoader()));
};
