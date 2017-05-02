import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import timelineReducer from './timelineReducer';
import entitiesReducer from './entitiesReducer';
import playerReducer from './playerReducer';
import tracksReducer from './tracksReducer';
import settingsReducer from './settingsReducer';
import queueReducer from './queueReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  timeline: timelineReducer,
  tracks: tracksReducer,
  player: playerReducer,
  entities: entitiesReducer,
  users: usersReducer,
  settings: settingsReducer,
  queue: queueReducer,
});

export default rootReducer;
