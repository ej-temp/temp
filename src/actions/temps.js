import { getAllTemps, getDetails } from '../services/tempApi';

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
