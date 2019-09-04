import { FETCH_LOW_TEMP, FETCH_HIGH_TEMP } from '../actions/temps';

const initialState = { };

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_HIGH_TEMP:
      return [...state, action.payload];
    case FETCH_LOW_TEMP:
      return [...state, action.payload];
    default:
      return state;
  }
}
