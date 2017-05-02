import api from 'api';

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';
export const FETCH_PLAYLISTS_ERROR = 'FETCH_PLAYLISTS_ERROR';

export function fetchPlaylists(userId) {
  return (dispatch) => {
    dispatch({ type: FETCH_PLAYLISTS, payload: { userId } });

    return api.fetchPlaylists()
      .then(json => dispatch({
        type: FETCH_PLAYLISTS_SUCCESS,
        payload: {
          userId,
          playlists: json,
        },
      }));
  };
}
