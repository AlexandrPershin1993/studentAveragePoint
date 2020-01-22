import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { connectRouter } from 'connected-react-router';

import { credit } from './credit';
import { loading } from './loading';

export const createRootReducer = history => (
  combineReducers({
    router: connectRouter(history),
    credit: credit.reducer,
    loading: loading.reducer
  })
)

export  function* rootSaga () {
  yield all([
    ...credit.sagas
  ])
};