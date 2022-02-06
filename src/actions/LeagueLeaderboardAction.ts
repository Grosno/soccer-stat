import { Dispatch } from 'redux';
import { getLeaderboardInfo } from '../api-requests/apiRequests';
import {
  HIDE_LEAGUE_LEADERBOARD_LOADER, LOAD_LEAGUE_LEADERBOARD_ERROR,
  LOAD_LEAGUE_LEADERBOARD_SUCCESS,
  SHOW_LEAGUE_LEADERBOARD_LOADER,
} from '../constants/actions/leaderboard';
import { ILeagueLeaderboardActionType } from '../types/actionTypes';
import { ILeaderboard } from '../types/api-types/leaderboardTypes';

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
const loadLeaderboardError = (error: string): ILeagueLeaderboardActionType => ({
  type: LOAD_LEAGUE_LEADERBOARD_ERROR,
  errorMsg: error,
});

export const loadLeagueLeaderboardAction = (id: string) => (dispatch: Dispatch) => {
  dispatch(showLeaderboardLoader());
  getLeaderboardInfo(id)
    .then((response: ILeaderboard) => dispatch(loadLeaderboardSuccess(response)))
    .catch((error) => dispatch(loadLeaderboardError(error)))
    .finally(() => dispatch(hideLeaderboardLoader()));
};
