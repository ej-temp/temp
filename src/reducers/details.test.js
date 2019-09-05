import reducer from './details';
import { FETCH_DETAIL } from '../actions/temps';

describe('details reducer', () => {
  it('handles the fetch detail action', () => {
    const initialState = {
      temps: [],
      name: ''
    };

    const newState = reducer(initialState, {
      type: FETCH_DETAIL,
      payload: { location: { name: 'hi' }, temps: [26, 57, 98, 24] }
    });

    expect(newState).toEqual({ 
      name: 'hi', 
      temps: [26, 57, 98, 24] });
  });
});
