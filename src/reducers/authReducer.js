import { AUTH_USER, AUTH_TOKEN } from '../actions/authActions';
import { AUTH_START } from 'actions/authActions';
import { STATUS_INITIAL, STATUS_PENDING } from 'constants';

const defaultAuthState = {
  token: null,
  user: null,
  status: STATUS_INITIAL
};

export default (state = defaultAuthState, action) => {
  switch(action.type) {
    case AUTH_START: {
      console.log('hallo');
      return {
        ...state,
        token: action.payload,
        status: STATUS_PENDING
      }
    }
    case AUTH_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case AUTH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
