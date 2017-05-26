import { combineReducers } from 'redux';
import dataReducer from 'data/reducer';
import timelineReducer from 'scenes/timeline/reducer';
import authReducer from './authReducer';
import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  entities: entitiesReducer,
  timeline: timelineReducer,
  data: dataReducer,
});

export default rootReducer;
