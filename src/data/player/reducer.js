import { createReducer } from 'redux-create-reducer';
import { PLAY_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_PLAYING } from './actions';

const defaultPlayerState = {
  indexInFeed: null,
  activeTrackId: null,
  active: false,
  isPlaying: false,
  activeFeedId: null,
  trackHistory: [],
  prevTracksHistory: [],
};

export default createReducer(defaultPlayerState, {
  [PLAY_TRACK](state, action) {
    const {
      feedId = state.activeFeedId, // Keep the current feed if no feed is given
      trackId,
      indexInFeed = state.indexInFeed,
    } = action.payload;

    return {
      ...state,
      activeTrackId: trackId,
      isPlaying: true,
      active: true,
      activeFeedId: feedId,
      indexInFeed,
    };
  },
  [NEXT_TRACK](state, action) {
    const {
      trackId,
      indexInFeed = state.indexInFeed,
      prevTracksHistory = state.prevTracksHistory,
    } = action.payload;

    if (!trackId) {
      return {
        ...state,
        isPlaying: false,
        activeTrackId: null,
        indexInFeed: 0,
      };
    }

    return {
      ...state,
      activeTrackId: trackId,
      indexInFeed,
      prevTracksHistory,
      trackHistory: [state.activeTrackId, ...state.trackHistory],
    };
  },
  [PREV_TRACK](state) {
    const [lastTrack, ...trackHistory] = state.trackHistory;

    return {
      ...state,
      activeTrackId: lastTrack || state.activeTrackId,
      prevTracksHistory: lastTrack
        ? [state.activeTrackId, ...state.prevTracksHistory]
        : [],
      trackHistory,
    };
  },
  [TOGGLE_PLAYING](state, action) {
    return {
      ...state,
      isPlaying: action.payload,
    };
  },
});
