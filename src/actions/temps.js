import { getAllTemps, getHottestTemp, getColdestTemp } from '../services/tempApi';

export const FETCH_TEMPS = 'FETCH_TEMPS';
export const fetchTemps = () => ({
  type: FETCH_TEMPS,
  payload: getAllTemps()
});

export const FETCH_HIGH_TEMP = 'FETCH_HIGH_TEMP';
export const fetchHighTemp = () => ({
  type: FETCH_HIGH_TEMP,
  payload: getHottestTemp()
});

export const FETCH_LOW_TEMP = 'FETCH_LOW_TEMP';
export const fetchLowTemp = () => ({
  type: FETCH_LOW_TEMP,
  payload: getColdestTemp()
});
