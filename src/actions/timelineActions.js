import api from 'api/api';
import { normalize } from 'normalizr';
import * as schema from './schema';

export const FETCH_TIMELINE = 'FETCH_TIMELINE';
export const FETCH_TIMELINES_SUCCESS = 'FETCH_TIMELINES_SUCCESS';
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS';

function fetchTimelineSuccess(type, json) {
  const normalized = normalize(json, schema.arrayOfTracks);
  return {
    type: FETCH_TIMELINE_SUCCESS,
    payload: {
      type,
      trackIds: normalized.result,
    },
    entities: normalized.entities,
  };
}

export function fetchTimeline(type) {
  const fetchTypeMap = {
    likes: () => api.fetchLikes(),
  };

  return (dispatch) => {
    dispatch({
      type: FETCH_TIMELINE,
      payload: type,
    });

    const apiCall = fetchTypeMap[type];
    if (!apiCall) {
      console.error(`${type} is not a known type`);
    }

    apiCall()
      .then((json) => {
        dispatch(fetchTimelineSuccess(
          type,
          json,
        ));
      });
  };
}
