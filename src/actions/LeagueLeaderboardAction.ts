import { Dispatch } from 'redux';
import { getLeaderboardInfo } from '../api-requests/apiRequests';
import {
  HIDE_LEAGUE_LEADERBOARD_LOADER, LOAD_LEAGUE_LEADERBOARD_ERROR,
  LOAD_LEAGUE_LEADERBOARD_SUCCESS,
  SHOW_LEAGUE_LEADERBOARD_LOADER,
} from '../constants/actions/leaderboard';
import { ILeagueLeaderboardActionType } from '../types/actionTypes';
import { ILeaderboard } from '../types/api-types/leaderboardTypes';
import { EMPTY_STRING, ZERO_VALUE } from '../constants/common';

const showLeaderboardLoader = (): ILeagueLeaderboardActionType => ({
  type: SHOW_LEAGUE_LEADERBOARD_LOADER,
});

const hideLeaderboardLoader = (): ILeagueLeaderboardActionType => ({
  type: HIDE_LEAGUE_LEADERBOARD_LOADER,
});

const loadLeaderboardSuccess = (data: ILeaderboard): ILeagueLeaderboardActionType => ({
  type: LOAD_LEAGUE_LEADERBOARD_SUCCESS,
  standings: data.standings,
  competition: data.competition,
  season: data.season,
});
const loadLeaderboardError = (code: number, message: string): ILeagueLeaderboardActionType => ({
  type: LOAD_LEAGUE_LEADERBOARD_ERROR,
  errorMsg: message,
});

export const loadLeagueLeaderboardAction = (id: string) => (dispatch: Dispatch) => {
  dispatch(showLeaderboardLoader());
  getLeaderboardInfo(id)
    .then((response: ILeaderboard) => (
      JSON.stringify(response).includes('error') || JSON.stringify(response).includes('errorCode')
        ? dispatch(loadLeaderboardError(response.error || ZERO_VALUE, response.message || EMPTY_STRING))
        : dispatch(loadLeaderboardSuccess(response))))
    .catch((error) => console.log(error))
    .finally(() => dispatch(hideLeaderboardLoader()));
};
