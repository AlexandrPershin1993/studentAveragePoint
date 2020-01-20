import { actionCreate } from '../../utils/action';

export const typesCredit = {
  LENGTH_STEPS: 'LENGTH_STEPS',
  SET_DATA: 'SET_DATA',
  SET_ARRAY_ESTIMATION: 'SET_ARRAY_ESTIMATION'
}

export const actionsCredit = {
  setData: actionCreate(typesCredit.SET_DATA),
  setArrayEstimation: actionCreate(typesCredit.SET_ARRAY_ESTIMATION)
}