import { combineReducers } from 'redux';
import dataReducer from 'data/reducer';
import modalReducer from 'scenes/modals';
import timelineReducer from 'scenes/timeline/reducer';
import authReducer from './authReducer';
import playlistsReducer from './playlistsReducer';
import entitiesReducer from './entitiesReducer';
import tracksReducer from './tracksReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tracks: tracksReducer,
  entities: entitiesReducer,
  playlists: playlistsReducer,
  modal: modalReducer,
  timeline: timelineReducer,
  data: dataReducer,
});

export default rootReducer;
