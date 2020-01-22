import { typesLoading } from './actions';

const initialState = {
  arrayMessage: []
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case typesLoading.ADD_MESSAGE_LOADING: 
      return {
        ...state,
        arrayMessage: [...state.arrayMessage, action.payload]
      }
    case typesLoading.DELETE_MESSAGE_LOADING:
      return {
        ...state,
        arrayMessage: state.arrayMessage.filter(value => value !== action.payload)
      }
    default: 
      return state;
  }
};