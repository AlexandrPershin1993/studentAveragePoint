import { actionCreate } from '../../utils/action';

export const typesCredit = {
  LENGTH_STEPS: 'LENGTH_STEPS',
  SET_DATA: 'SET_DATA'
}

export const actionsCredit = {
  setData: actionCreate(typesCredit.SET_DATA)
}