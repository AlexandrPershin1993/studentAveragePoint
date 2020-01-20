import { typesCredit } from './actions';

const initialState = {
  lengthSteps: 4,
  data: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typesCredit.SET_DATA :
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}