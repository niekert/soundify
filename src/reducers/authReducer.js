import { INITIAL, OK, PENDING } from 'constants';
import { AUTH_USER, AUTH_START } from '../actions/authActions';

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
    default:
      return state;
  }
};
