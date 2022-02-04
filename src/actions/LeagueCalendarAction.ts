import { Dispatch } from 'redux';
import { IMatchesActionType } from '../types/actionTypes';
import { getMatches } from '../api-requests/apiRequests';
import { ICompetitionMatches } from '../types/api-types/matchTypes';
import { LOAD_MATCHES_ERROR, LOAD_MATCHES_SUCCESS } from '../constants/actions/leagueCalendar';

const loadMatchesSuccess = (data: ICompetitionMatches): IMatchesActionType => ({
  type: LOAD_MATCHES_SUCCESS,
  matches: data.matches,
  competition: data.competition,
  count: data.count,
});

const loadMatchesError = (error: string): IMatchesActionType => ({
  type: LOAD_MATCHES_ERROR,
  errorMsg: error,
});

export const loadMatchesByIDAction = (id: string) => (dispatch: Dispatch) => {
  getMatches(id)
    .then((response: ICompetitionMatches) => dispatch(loadMatchesSuccess(response)))
    .catch((error) => dispatch(loadMatchesError(error)));
};
