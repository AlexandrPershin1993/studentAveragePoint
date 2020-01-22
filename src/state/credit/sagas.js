import fetch from '../../utils/fetch';
import { call, put, takeLatest } from 'redux-saga/effects';
import { typesCredit, actionsCredit } from './actions';
import { actionsLoading } from '../loading/actions';

function* sendDataUserSaga(action) {
  const message = 'Отправка данных';
  try {
    yield put( actionsLoading.addMessageLoading(message) );
    yield call(sendDataUser, JSON.stringify(action.payload));
    yield put( actionsCredit.setStatusLoadingDataUser('succes') );
  } catch(err) {
    yield put( actionsCredit.setStatusLoadingDataUser('error') );
  } finally {
    yield put( actionsLoading.deleteMessageLoading(message) );
  }
}

const sendDataUser = async (data) => {
  const response = await fetch({
    body: data,
    url: 'post'
  });
  if(response.status !== 200) throw new Error('error status');
  const result = await response.json();
  return result;
}

export const sagas = [
  takeLatest(typesCredit.TO_DO_SEND_DATA_USER, sendDataUserSaga)
]
