import { typesCredit } from './actions';

const initialState = {
  lengthSteps: 4,
  data: {},
  arrayEstimation: [],
  numberMissingLessons: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typesCredit.SET_NUMBER_MISSING_LESSONS:
      return {
        ...state,
        numberMissingLessons: action.payload
      }
    case typesCredit.SET_ARRAY_ESTIMATION:
      return {
        ...state,
        arrayEstimation: action.payload
      }
    case typesCredit.SET_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}