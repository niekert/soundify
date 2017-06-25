import { createReducer } from 'redux-create-reducer';
import { OK, PENDING } from 'app-constants';
import { SAVE_FEED, FETCH_NEXT, FETCH_NEXT_SUCCESS } from './actions';

export default createReducer(
  {},
  {
    [SAVE_FEED](state, action) {
      const { feedId, trackIds, next } = action.payload;

      return {
        ...state,
        [feedId]: {
          trackIds,
          next,
        },
      };
    },
    [FETCH_NEXT](state, action) {
      const { id } = action.payload;

      return {
        ...state,
        [id]: {
          ...state[id],
          status: PENDING,
        },
      };
    },
    [FETCH_NEXT_SUCCESS](state, action) {
      const { feedId, trackIds, next } = action.payload;
      return {
        ...state,
        [feedId]: {
          status: OK,
          trackIds: [...state[feedId].trackIds, ...trackIds],
          next,
        },
      };
    },
  },
);
