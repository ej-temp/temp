import { FETCH_TEMPS } from '../actions/temps';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TEMPS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
