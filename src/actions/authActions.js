import SC from 'soundcloud';
import queryString from 'query-string';
import api from 'api';

export const AUTH_TOKEN = 'AUTH_TOKEN';
export const AUTH_START = 'AUTH_START';
export const LOGOUT = 'LOGOUT';
export const NO_AUTH = 'NO_AUTH';
export const AUTH_USER = 'AUTH_USER';
export const AUTH_CALLBACK = 'SCConnect';

export function authCallback(location) {
  return () => {
    api.authCallback(location);
  };
}

export function fetchAuthedUser() {
  return dispatch => {
    dispatch({ type: AUTH_START });

    api
      .fetchUser()
      .then(data =>
        dispatch({
          type: AUTH_USER,
          payload: data,
        }),
      )
      .catch(error => {
        dispatch({
          type: AUTH_USER,
          payload: null,
          error,
        });

        throw error;
      });
  };
}

export function onAuthCallback(location) {
  SC.connectCallback.call({ location }); // Accesses window.location..
  const query = queryString.parse(location.search);

  const { opener } = window;
  if (opener && query.code) {
    opener.postMessage('SCConnect');
  }
}

export function attemptAuth() {
  return dispatch => {
    api
      .attemptAuth()
      .then(() => {
        dispatch(fetchAuthedUser());
      })
      .catch(error => ({
        type: AUTH_USER,
        payload: null,
        error,
      }));
  };
}

export function logout() {
  api.logout();
  return {
    type: LOGOUT,
  };
}
