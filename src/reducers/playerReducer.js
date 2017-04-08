import { TOGGLE_TRACK, TOGGLE_PLAYING } from 'actions/playerActions';

const defaultPlayerState = {
  active: false,
  activeTrackId: null,
  isPlaying: false,
  activeTimelineId: null,
  trackHistory: [],
};

export default (state = defaultPlayerState, action) => {
  switch (action.type) {
    case TOGGLE_TRACK: {
      const {
        trackId,
        isPlaying,
        timelineId,
        previousTrackId,
      } = action.payload;
      return {
        ...state,
        active: true,
        activeTrackId: trackId,
        isPlaying,
        previousTrackId,
        activeTimelineId: timelineId || state.activeTimelineId,
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
