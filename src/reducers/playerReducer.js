import { TOGGLE_TRACK, TOGGLE_PLAYING } from 'actions/playerActions';

const defaultPlayerState = {
  active: false,
  activeTrackId: null,
  isPlaying: false,
  activeTimelineId: null,
};

export default (state = defaultPlayerState, action) => {
  switch (action.type) {
    case TOGGLE_TRACK:
      const { trackId, isPlaying, timelineId } = action.payload;
      return {
        ...state,
        active: true,
        activeTrackId: trackId,
        isPlaying,
        activeTimelineId: timelineId || state.activeTimelineId
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
