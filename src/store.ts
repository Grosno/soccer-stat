import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import competitionsReducer from './reducers/CompetitionsReducer';

export const store = createStore(
  combineReducers({
    competitions: competitionsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
