import { combineReducers } from 'redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import timelineReducer from './timelineReducer';
import searchReducer from './searchReducer';
import entitiesReducer from './entitiesReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  timelines: timelineReducer,
  player: playerReducer,
  entities: entitiesReducer,
  users: usersReducer,
});

export default rootReducer;
