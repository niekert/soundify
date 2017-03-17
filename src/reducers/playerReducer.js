import { TOGGLE_TRACK, TOGGLE_PLAYING } from 'actions/playerActions';

const defaultPlayerState = {
  active: false,
  activeTrackId: null,
  isPlaying: false
};

export default (state = defaultPlayerState, action) => {
  switch(action.type) {
    case TOGGLE_TRACK:
      const { trackId, isPlaying } = action.payload;
      return {
        ...state,
        active: true,
        activeTrackId: trackId,
        isPlaying
      };
    case TOGGLE_PLAYING:
      return {
        ...state,
        isPlaying: action.payload
      };
    default:
      return state;
  }
}
