import { actionCreate } from '../../utils/action';

export const typesCredit = {
  SET_STEP: 'SET_STEP',
  SET_DATA: 'SET_DATA',
  SET_ARRAY_ESTIMATION: 'SET_ARRAY_ESTIMATION',
  SET_NUMBER_MISSING_LESSONS: 'SET_NUMBER_MISSING_LESSONS',
  TO_DO_RESET: 'TO_DO_RESET',
  TO_DO_SEND_DATA_USER: 'TO_DO_SEND_DATA_USER',
  SET_STATUS_LOADING_DATA_USER: 'SET_STATUS_LOADING_DATA_USER'
}

export const actionsCredit = {
  setStep: actionCreate(typesCredit.SET_STEP),
  setData: actionCreate(typesCredit.SET_DATA),
  setArrayEstimation: actionCreate(typesCredit.SET_ARRAY_ESTIMATION),
  setNumberMissingLessons: actionCreate(typesCredit.SET_NUMBER_MISSING_LESSONS),
  toDoReset: actionCreate(typesCredit.TO_DO_RESET),
  toDoSendDataUser: actionCreate(typesCredit.TO_DO_SEND_DATA_USER),
  setStatusLoadingDataUser: actionCreate(typesCredit.SET_STATUS_LOADING_DATA_USER)
}