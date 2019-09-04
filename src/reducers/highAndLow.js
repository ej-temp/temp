import { FETCH_LOW_TEMP, FETCH_HIGH_TEMP } from '../actions/temps';

const initialState = { 
  lowTemp: {
    name: '',
    temp: null
  },
  highTemp: {
    name: '',
    temp: null
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_HIGH_TEMP:
      return { 
        ...state, 
        highTemp: {
          name: action.payload.name,
          temp: action.payload.temp
        } 
      };
    case FETCH_LOW_TEMP:
      return {
        ...state,
        lowTemp: {
          name: action.payload.name,
          temp: action.payload.temp
        }
      };
    default:
      return state;
  }
}
