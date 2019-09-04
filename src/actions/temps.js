import { getAllTemps, getDetails, getHottestTemp, getColdestTemp, getAvgTemp } from '../services/tempApi';

export const FETCH_TEMPS = 'FETCH_TEMPS';
export const fetchTemps = () => ({
  type: FETCH_TEMPS,
  payload: getAllTemps()
});

export const FETCH_DETAIL = 'FETCH_DETAIL';
export const fetchDetails = (id) => ({
  type: FETCH_DETAIL,
  payload: getDetails(id)
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

export const FETCH_AVG_TEMP = 'FETCH_AVG_TEMP';
export const fetchAvgTemp = () => ({
  type: FETCH_AVG_TEMP,
  payload: getAvgTemp()
});
