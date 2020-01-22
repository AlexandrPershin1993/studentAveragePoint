import { typesCredit } from './actions';

const initialState = {
  lengthSteps: 4,
  numberLessons: 30,
  data: {
    nameObject: '',
    numberEstimation: 0
  },
  arrayEstimation: [],
  numberMissingLessons: 0,
  statusLoadingDataUser: '',
  step: 1
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
    case typesCredit.SET_STATUS_LOADING_DATA_USER:
      return {
        ...state,
        statusLoadingDataUser: action.payload
      }
    case typesCredit.TO_DO_RESET:
      return initialState;
    case typesCredit.SET_STEP:
      return {
        ...state,
        step: action.payload
      }
    default:
      return state;
  }
}