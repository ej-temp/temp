import reducer from './highAndLow';
import { FETCH_HIGH_TEMP, FETCH_LOW_TEMP, FETCH_AVG_TEMP } from '../actions/temps';

describe('high and low reducer', () => {
  it('handles the fetch high temp action', () => {
    const initialState = {
      lowTemp: {
        name: '',
        temp: null
      },
      highTemp: {
        name: '',
        temp: null
      },
      avgTemp: null
    };

    const newState = reducer(initialState, {
      type: FETCH_HIGH_TEMP,
      payload: { 
        name: 'name',
        temp: 76
      }
    });

    expect(newState).toEqual({ 
      lowTemp: {
        name: '',
        temp: null
      },
      highTemp: {
        name: 'name',
        temp: 76
      },
      avgTemp: null
    });
  });

  it('handles the fetch low temp action', () => {
    const initialState = {
      lowTemp: {
        name: '',
        temp: null
      },
      highTemp: {
        name: '',
        temp: null
      },
      avgTemp: null
    };

    const newState = reducer(initialState, {
      type: FETCH_LOW_TEMP,
      payload: { 
        name: 'name',
        temp: 76
      }
    });

    expect(newState).toEqual({ 
      lowTemp: {
        name: 'name',
        temp: 76
      },
      highTemp: {
        name: '',
        temp: null
      },
      avgTemp: null
    });
  });

  it('handles the fetch low temp action', () => {
    const initialState = {
      lowTemp: {
        name: '',
        temp: null
      },
      highTemp: {
        name: '',
        temp: null
      },
      avgTemp: null
    };

    const newState = reducer(initialState, {
      type: FETCH_AVG_TEMP,
      payload: { 
        avgTemp: 76
      }
    });

    expect(newState).toEqual({ 
      lowTemp: {
        name: '',
        temp: null
      },
      highTemp: {
        name: '',
        temp: null
      },
      avgTemp: 76
    });
  });
});
