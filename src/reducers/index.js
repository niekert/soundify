import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import timelineReducer from './timelineReducer';
import searchReducer from './searchReducer';
import entitiesReducer from './entitiesReducer';
import playerReducer from './playerReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  timelines: timelineReducer,
  player: playerReducer,
  entities: entitiesReducer,
  users: usersReducer,
  settings: settingsReducer,
});

export default rootReducer;
