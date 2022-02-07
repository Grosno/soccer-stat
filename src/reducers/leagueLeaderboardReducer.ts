import produce from 'immer';
import { ILeagueLeaderboardState } from '../types/stateTypes';
import { ILeagueLeaderboardActionType } from '../types/actionTypes';
import { ICompetition, ICurrentSeason } from '../types/api-types/apiTypes';
import { EMPTY_STRING, ZERO_VALUE } from '../constants/common';
import { IStanding } from '../types/api-types/leaderboardTypes';
import {
  HIDE_LEAGUE_LEADERBOARD_LOADER, LOAD_LEAGUE_LEADERBOARD_ERROR,
  LOAD_LEAGUE_LEADERBOARD_SUCCESS,
  SHOW_LEAGUE_LEADERBOARD_LOADER,
} from '../constants/actions/leaderboard';

const initialState: ILeagueLeaderboardState = {
  standings: [],
  competition: {} as ICompetition,
  season: {} as ICurrentSeason,
  isLoading: false,
  isLoadingError: false,
  errorMsg: EMPTY_STRING,
  error: ZERO_VALUE,
  filters: {},
};

const showLeaderboardLoader = (draft: ILeagueLeaderboardState) => {
  draft.isLoading = true;
  return draft;
};

const hideLeaderboardLoader = (draft: ILeagueLeaderboardState) => {
  draft.isLoading = false;
  return draft;
};

const loadingError = (draft: ILeagueLeaderboardState, error?: number, message?: string) => {
  draft.isLoadingError = true;
  draft.errorMsg = message || EMPTY_STRING;
  draft.error = error || ZERO_VALUE;
  return draft;
};

const loadLeagueLeaderboard = (draft: ILeagueLeaderboardState, standings?: Array<IStanding>, competition?: ICompetition, season?: ICurrentSeason) => {
  draft.standings = standings || [];
  draft.competition = competition || {} as ICompetition;
  draft.season = season || {} as ICurrentSeason;
  draft.isLoadingError = false;
  return draft;
};

export default (state = initialState, action: ILeagueLeaderboardActionType) => produce(
  state,
  (draft: ILeagueLeaderboardState) => {
    switch (action.type) {
      case SHOW_LEAGUE_LEADERBOARD_LOADER: return showLeaderboardLoader(draft);
      case HIDE_LEAGUE_LEADERBOARD_LOADER: return hideLeaderboardLoader(draft);
      case LOAD_LEAGUE_LEADERBOARD_SUCCESS: return loadLeagueLeaderboard(draft, action.standings, action.competition, action.season);
      case LOAD_LEAGUE_LEADERBOARD_ERROR: return loadingError(draft, action.error, action.errorMsg);
      default: return state;
    }
  },
);
