import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import competitionsReducer from './reducers/competitionsReducer';
import paginationReducer from './reducers/paginationReducer';

export const store = createStore(
  combineReducers({
    competitions: competitionsReducer,
    pagination: paginationReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
