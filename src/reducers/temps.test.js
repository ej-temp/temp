import reducer from './temps';
import { FETCH_TEMPS } from '../actions/temps';

describe('temps reducer', () => {
  it('handles the fetch temps action', () => {
    const initialState = [];

    const newState = reducer(initialState, {
      type: FETCH_TEMPS,
      payload: [{ name: 'name', temp: 60 }]
    });

    expect(newState).toEqual([{ name: 'name', temp: 60 }]);
  });
})
;
