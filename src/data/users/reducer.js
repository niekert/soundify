import { createReducer } from 'redux-create-reducer';
import { OK, PENDING } from 'app-constants';
import { FETCH_PROFILE, FETCH_PROFILE_SUCCESS } from './actions';

const initialState = {};

export default createReducer(initialState, {
  [FETCH_PROFILE](state, action) {
    return {
      ...state,
      [action.payload.userId]: PENDING,
    };
  },
  [FETCH_PROFILE_SUCCESS](state, action) {
    return {
      ...state,
      [action.payload.userId]: OK,
    };
  },
});
