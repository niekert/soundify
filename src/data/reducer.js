import { combineReducers } from 'redux';
import playerReducer from './player/reducer';
import tracksReducer from './tracks/reducer';

export default combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
});
