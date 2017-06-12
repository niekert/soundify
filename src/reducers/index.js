import { combineReducers } from 'redux';
import dataReducer from 'data/reducer';
import timelineReducer from 'scenes/timeline/reducer';
import userProfile from 'scenes/userProfile/reducer';
import authReducer from './authReducer';
import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  entities: entitiesReducer,
  timeline: timelineReducer,
  userProfile,
  data: dataReducer,
});

export default rootReducer;
