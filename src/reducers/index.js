import { combineReducers } from 'redux';
import authReducer from './authReducer';
import timelineReducer from './timelineReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  timelines: timelineReducer
});

export default rootReducer;
