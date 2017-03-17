import api from 'api/api';
import { normalize } from 'normalizr';
import * as schema from './schema';

export const FETCH_TIMELINE = 'FETCH_TIMELINE';
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS';

export const TIMELINE_TYPE_LIKES = 'likes';

function fetchTimeline(type) {
  return {
    type: FETCH_TIMELINE,
    payload: type,
  };
}

function fetchTimelineSuccess(type, json) {
  return {
    type: FETCH_TIMELINE_SUCCESS,
    payload: {
      type,
      data: json,
    },
  };
}

export function fetchLikes() {
  return (dispatch) => {
    dispatch(fetchTimeline(TIMELINE_TYPE_LIKES));

    api.fetchLikes()
      .then((json) => {
        dispatch(fetchTimelineSuccess(
          TIMELINE_TYPE_LIKES,
          json,
        ));
      });
  };
}
