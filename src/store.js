import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer, rootSaga } from './state';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(createRootReducer(history), applyMiddleware(routerMiddleware(history), sagaMiddleware));
sagaMiddleware.run(rootSaga);