import { combineReducers } from 'redux';
import getAllTemps from './temps';
import details from './details';

export default combineReducers({
  getAllTemps,
  details
});
