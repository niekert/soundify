import api from 'api';
import { normalize } from 'normalizr';
import * as schema from 'schema';

export const FETCH_PROFILE = 'userProfile/FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = `${FETCH_PROFILE}_SUCCESS`;

export function fetchProfile(userId) {
  return dispatch => {
    dispatch({
      type: FETCH_PROFILE,
      payload: { userId },
    });

    api.fetchUser(userId).then(data => {
      const normalized = normalize(data, schema.user);

      dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: { userId },
        entities: normalized.entities,
      });
    });
  };
}

export function fetchProfileTracks (userId) {
  return dispatch => {

  };
}
