import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import competitionsReducer from './reducers/competitionsReducer';
import paginationReducer from './reducers/paginationReducer';
import teamsReducer from './reducers/teamsReducer';
import leagueCalendarReducer from './reducers/leagueCalendarReducer';
import teamCalendarReducer from './reducers/teamCalendarReducer';

export const store = createStore(
  combineReducers({
    competitions: competitionsReducer,
    pagination: paginationReducer,
    teams: teamsReducer,
    matches: leagueCalendarReducer,
    teamMatches: teamCalendarReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
