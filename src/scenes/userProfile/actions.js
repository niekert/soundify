import api from 'api';
import { normalize } from 'normalizr';
import * as schema from 'schema';

export const FETCH_PROFILE = 'userProfile/FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = `${FETCH_PROFILE}_SUCCESS`;

export const FETCH_PROFILE_FEED = 'userprofile/FETCH_PROFILE_FEED';
export const FETCH_PROFILE_FEED_SUCCESS = `${FETCH_PROFILE_FEED}_SUCCESS`;

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

function fetchProfileFeedSuccess(tracks, userId, feed) {
  const normalizedTracks = normalize(tracks, schema.arrayOfTracks);

  return {
    type: FETCH_PROFILE_FEED_SUCCESS,
    payload: {
      userId,
      feed,
    },
    entities: {
      ...normalizedTracks.entities,
      feeds: schema.extractFeed(`${userId}::${feed}`, normalizedTracks.result),
    },
  };
}

export function fetchProfileTracks(userId) {
  return dispatch => {
    api
      .fetchUserTracks(userId)
      .then(tracks =>
        dispatch(fetchProfileFeedSuccess(tracks, userId, 'tracks')),
      );
  };
}
