import { combineReducers } from 'redux';
import dataReducer from 'data/reducer';
import timelineReducer from 'scenes/timeline/reducer';
import authReducer from './authReducer';
import playlistsReducer from './playlistsReducer';
import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  entities: entitiesReducer,
  playlists: playlistsReducer,
  timeline: timelineReducer,
  data: dataReducer,
});

export default rootReducer;
