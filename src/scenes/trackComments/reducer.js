import { createReducer } from 'redux-create-reducer';
import { Map } from 'immutable';
import { PENDING, OK, ERROR } from 'app-constants';
import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from './actions';

const defaultState = {
  trackComments: new Map(),
};

export default createReducer(defaultState, {
  [FETCH_COMMENTS](state, action) {
    const { trackId } = action.payload;
    return {
      trackComments: state.trackComments.set(trackId, {
        ...state.trackComments.get(trackId),
        status: PENDING,
      }),
    };
  },
  [FETCH_COMMENTS_SUCCESS](state, action) {
    const { trackId, commentIds } = action.payload;

    return {
      trackComments: state.trackComments.set(trackId, {
        status: OK,
        commentIds,
      }),
    };
  },
  [FETCH_COMMENTS_ERROR](state, action) {
    const { trackId, error } = action.payload;

    return {
      trackComments: state.trackComments.set(trackId, {
        status: ERROR,
        error,
      }),
    };
  },
});
