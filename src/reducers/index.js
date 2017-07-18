import { combineReducers } from 'redux';
import dataReducer from 'data/reducer';
import timelineReducer from 'scenes/timeline/reducer';
import userProfile from 'scenes/userProfile/reducer';
import feedsReducer from 'scenes/tracksFeed/reducer';
import commentsReducer from 'scenes/trackComments/reducer';
import authReducer from './authReducer';
import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  entities: entitiesReducer,
  timeline: timelineReducer,
  users: userProfile,
  feeds: feedsReducer,
  comments: commentsReducer,
  data: dataReducer,
});

export default rootReducer;
