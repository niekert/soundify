import { createReducer } from 'redux-create-reducer';
import { GRID } from 'scenes/tracksFeed/feedTypes';
import {
  SET_VOLUME,
  SET_TRACK_FEED_TYPE,
  TOGGLE_SIDEBAR_PROFILE_PIN,
} from './actions';

const defaultState = {
  volumePercentage: 100,
  trackFeedType: GRID,
  pinnedProfiles: {},
};

export default createReducer(defaultState, {
  [SET_VOLUME](state, action) {
    return {
      ...state,
      volumePercentage: action.payload,
    };
  },
  [TOGGLE_SIDEBAR_PROFILE_PIN](state, action) {
    const { userId, userName } = action.payload;
    const pinnedProfiles = { ...state.pinnedProfiles };

    if (pinnedProfiles[userId]) {
      delete pinnedProfiles[userId];
    } else {
      pinnedProfiles[userId] = userName;
    }

    return {
      ...state,
      pinnedProfiles,
    };
  },
  [SET_TRACK_FEED_TYPE](state, action) {
    return {
      ...state,
      trackFeedType: action.payload,
    };
  },
});
