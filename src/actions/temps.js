export const FETCH_TEMPS = 'FETCH_TEMPS';
export const fetchTemps = () => ({
  type: FETCH_TEMPS,
  payload: getAllTemps()
});
