import { combineReducers } from 'redux';
import getAllTemps from './temps';
import highAndLowTemps from './highAndLow'; 
import details from './details';

export default combineReducers({
  getAllTemps,
  highAndLowTemps,
  details
});
