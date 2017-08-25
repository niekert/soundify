import api from 'api';
import { normalize } from 'normalizr';
import { saveFeed } from 'scenes/tracksFeed/actions';
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

function fetchProfileFeedSuccess(dispatch, feed, userId, feedName) {
  const normalizedTracks = normalize(feed.collection, schema.arrayOfTracks);

  dispatch({
    type: FETCH_PROFILE_FEED_SUCCESS,
    payload: {
      userId,
      feedName,
    },
    entities: normalizedTracks.entities,
  });

  dispatch(
    saveFeed(`${userId}::${feedName}`, normalizedTracks.result, feed.next_href),
  );
}

export function fetchProfileFeed(userId, feedName) {
  return dispatch => {
    api
      .fetchUserFeed(userId, feedName)
      .then(feed => fetchProfileFeedSuccess(dispatch, feed, userId, feedName));
  };
}
