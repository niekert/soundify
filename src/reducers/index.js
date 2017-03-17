import { combineReducers } from 'redux';
import authReducer from './authReducer';
import timelineReducer from './timelineReducer';
import playerReducer from './playerReducer';
import tracksReducer from './tracksReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  timelines: timelineReducer,
  player: playerReducer,
  tracks: tracksReducer
});

export default rootReducer;
