import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { connectRouter } from 'connected-react-router';

import { credit } from './credit';

export const createRootReducer = history => (
  combineReducers({
    router: connectRouter(history),
    credit: credit.reducer
  })
)

export  function* rootSaga () {
 yield all([

 ])
};