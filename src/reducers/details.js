import { FETCH_DETAIL, CLEAR_DETAIL } from '../actions/temps';

const initialState = {
  temps: [],
  name: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DETAIL:
      return { 
        ...state, 
        name: action.payload.location.name,
        temps: action.payload.temps
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        name: '',
        temps: []
      };
    default:
      return state;
  }
}
