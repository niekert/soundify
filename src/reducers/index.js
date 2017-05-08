import { combineReducers } from 'redux';
import modalReducer from 'scenes/modals';
import authReducer from './authReducer';
import playlistsReducer from './playlistsReducer';
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
  playlists: playlistsReducer,
  settings: settingsReducer,
  queue: queueReducer,
  modal: modalReducer,
});

export default rootReducer;
