import { combineReducers } from 'redux';
import playerReducer from './player/reducer';
import tracksReducer from './tracks/reducer';
import settingsReducer from './settings/reducer';
import queueReducer from './queue/reducer';

export default combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
  settings: settingsReducer,
  queue: queueReducer,
});
