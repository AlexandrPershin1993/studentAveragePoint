import { actionCreate } from '../../utils/action';

export const typesLoading = {
  ADD_MESSAGE_LOADING: 'ADD_MESSAGE_LOADING',
  DELETE_MESSAGE_LOADING: 'DELETE_MESSAGE_LOADING'
}

export const actionsLoading = {
  addMessageLoading: actionCreate(typesLoading.ADD_MESSAGE_LOADING),
  deleteMessageLoading: actionCreate(typesLoading.DELETE_MESSAGE_LOADING)
}