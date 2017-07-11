import { INITIAL, OK, PENDING } from 'app-constants';
import { uniq } from 'lodash';
import {
  AUTH_USER,
  AUTH_START,
  TOGGLE_FOLLOWING,
  LOGOUT,
} from '../actions/authActions';

const defaultAuthState = {
  user: null,
  status: INITIAL,
};

export default (state = defaultAuthState, action) => {
  switch (action.type) {
    case AUTH_START: {
      return {
        ...state,
        status: PENDING,
      };
    }
    case AUTH_USER:
      return {
        ...state,
        user: action.payload,
        status: OK,
      };
    case LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    case TOGGLE_FOLLOWING: {
      const currentFollowings = state.user.followings;
      const { userId, isFollowing } = action.payload;

      const followings = isFollowing
        ? [...currentFollowings, userId]
        : currentFollowings.filter(id => id !== userId);

      return {
        ...state,
        user: {
          ...state.user,
          followings: uniq(followings),
        },
      };
    }
    default:
      return state;
  }
};
