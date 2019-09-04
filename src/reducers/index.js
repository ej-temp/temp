import { combineReducers } from 'redux';
import getAllTemps from './temps';
import highAndLowTemps from './highAndLow'; 

export default combineReducers({
  getAllTemps,
  highAndLowTemps
});
