import { combineReducers } from 'redux';
import featureReducer from './feature/reducer';

export default combineReducers({
  items: featureReducer
});
