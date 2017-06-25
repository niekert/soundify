import { TOGGLE_TRACK, TOGGLE_PLAYING } from './actions';

const defaultPlayerState = {
  active: false,
  activeTrackId: null,
  isPlaying: false,
  activeFeedId: null,
  trackHistory: [],
};

export default (state = defaultPlayerState, action) => {
  switch (action.type) {
    case TOGGLE_TRACK: {
      const { trackId, isPlaying, feedId, previousTrackId } = action.payload;

      return {
        ...state,
        active: true,
        activeTrackId: trackId,
        isPlaying,
        previousTrackId,
        activeFeedId: feedId || state.activeFeedId,
        trackHistory: [...state.trackHistory, state.activeTrackId],
      };
    }
    case TOGGLE_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };
    default:
      return state;
  }
};
