import { combineReducers } from 'redux';
import authReducer from './authReducer';
import timelineReducer from './timelineReducer';
import entitiesReducer from './entitiesReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  timelines: timelineReducer,
  player: playerReducer,
  entities: entitiesReducer,
});

export default rootReducer;
