import api from 'api';
import { hideModal } from 'scenes/modals';

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';
export const FETCH_PLAYLISTS_ERROR = 'FETCH_PLAYLISTS_ERROR';

export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const ADD_PLAYLIST_ERROR = 'ADD_PLAYLIST_ERROR';
export const ADD_PLAYLIST_SUCCESS = 'ADD_PLAYLIST_SUCCESS';

export function fetchPlaylists(userId) {
  return (dispatch) => {
    dispatch({ type: FETCH_PLAYLISTS, payload: { userId } });

    return api.fetchPlaylists()
      .then(playlists => dispatch({
        type: FETCH_PLAYLISTS_SUCCESS,
        payload: {
          playlists: playlists.reverse(), // old to new
        },
      }));
  };
}

export function addPlaylist(title) {
  return (dispatch) => {
    dispatch({ type: ADD_PLAYLIST, payload: { title } });

    if (!title || !title.length) {
      dispatch({
        type: ADD_PLAYLIST_ERROR,
        payload: {
          error: 'A playlist requires a title',
        },
      });
      return;
    }

    api.addPlaylist(title)
      .then(playlist => dispatch({
        type: ADD_PLAYLIST_SUCCESS,
        payload: playlist,
      }))
      .then(() => dispatch(hideModal()));
  };
}
