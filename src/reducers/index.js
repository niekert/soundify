import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import timelineReducer from './timelineReducer';
import entitiesReducer from './entitiesReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  timelines: timelineReducer,
  player: playerReducer,
  entities: entitiesReducer,
  users: usersReducer,
});

export default rootReducer;
