import { createReducer } from 'redux-create-reducer';
import { Map } from 'immutable';
import { SET_VOLUME, TOGGLE_SIDEBAR_PROFILE_PIN } from './actions';

const defaultState = {
  volumePercentage: 100, // TODO: use redux-localstorage
  pinnedProfiles: new Map(),
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

    if (state.pinnedProfiles.has(userId)) {
      return {
        ...state,
        pinnedProfiles: state.pinnedProfiles.delete(userId),
      };
    }

    return {
      ...state,
      pinnedProfiles: state.pinnedProfiles.set(userId, userName),
    };
  },
});
