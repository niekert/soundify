import api from 'api';
import { normalize } from 'normalizr';
import { track as trackSchema } from './schema';

export const FETCH_TRACK_SUCCESS = 'FETCH_TRACK_SUCCESS';
export const FETCH_TRACK = 'FETCH_TRACK';

export function fetchTrack(trackId) {
  return dispatch => {
    api.fetchTrack(trackId).then(json => {
      const normalized = normalize(json, trackSchema);
      dispatch({
        type: FETCH_TRACK_SUCCESS,
        payload: normalized.result,
        entities: normalized.entities,
      });
    });

    dispatch({
      type: FETCH_TRACK,
      payload: trackId,
    });
  };
}

export function toggleLike(trackId, toggle) {
  return dispatch => {
    api.toggleLike(trackId, toggle).then(() => dispatch(fetchTrack(trackId)));
  };
}
