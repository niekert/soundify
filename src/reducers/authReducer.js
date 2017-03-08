import { AUTH_USER, AUTH_TOKEN } from '../actions/authActions';

const defaultAuthState = {
  token: null
};


export default (state = defaultAuthState, action) => {
  switch(action.type) {
    case AUTH_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case AUTH_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}
