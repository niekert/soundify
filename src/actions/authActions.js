import SC from 'soundcloud';
import queryString from 'query-string';

export const AUTH_TOKEN = 'AUTH_TOKEN';
export const AUTH_START = 'AUTH_START';
export const AUTH_USER = 'AUTH_USER';
export const AUTH_CALLBACK = 'SCConnect';

export function attemptAuth () {
  return dispatch => {
    dispatch({ type: AUTH_START });

    SC.initialize({
      client_id: '509e98546922430580cad848eeb0e25d',
      redirect_uri: 'http://localhost:8080/callback'
    });

    SC.connect()
      .then(({ oauth_token: token }) => {
        localStorage.setItem(AUTH_TOKEN, token);
        dispatch(authToken(token));
        dispatch(fetchAuthedUser(token));
      });
  };
}

export function authCallback (location) {
  return dispatch => {
    SC.connectCallback.call({ location }); // hacky but works lol
  }
}

export function fetchAuthedUser (authToken) {
  return dispatch => {
    dispatch({ type: AUTH_START, payload: authToken });

    fetch(`//api.soundcloud.com/me?oauth_token=${authToken}`)
      .then(resp => resp.json())
      .then(data => dispatch(authUser(data)));
  }
}

export function onAuthCallback (location) {
  SC.connectCallback.call({ location }); // Accesses window.location..
  const query = queryString.parse(location.search);

  if (opener && query.code) {
    opener.postMessage('SC')
  }
}

export function initAuth (authToken) {
  return dispatch => {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    if (authToken) {
      return dispatch(fetchAuthedUser(authToken, false));
    }
    return null;
  };
}

function authToken(token) {
  return {
    type: AUTH_TOKEN,
    payload: token
  };
}

function authUser(user) {
  return {
    type: AUTH_USER,
    payload: user
  };
}

