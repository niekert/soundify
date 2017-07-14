import { createReducer } from 'redux-create-reducer';
import { SET_VOLUME, TOGGLE_SIDEBAR_PROFILE_PIN } from './actions';

const defaultState = {
  volumePercentage: 100,
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
});
