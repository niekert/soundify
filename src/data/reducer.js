import { combineReducers } from 'redux';
import playerReducer from './player/reducer';
import tracksReducer from './tracks/reducer';
import settingsReducer from './settings/reducer';
import modalsReducer from './modals/reducer';
import queueReducer from './queue/reducer';
import playlistsReducer from './playlists/reducer';

export default combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
  settings: settingsReducer,
  playlists: playlistsReducer,
  modal: modalsReducer,
  queue: queueReducer,
});
