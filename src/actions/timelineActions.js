import api from 'api/api';
import { normalize } from 'normalizr';
import * as schema from './schema';

export const FETCH_TIMELINE = 'FETCH_TIMELINE';
export const FETCH_TIMELINES_SUCCESS = 'FETCH_TIMELINES_SUCCESS';
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS';

function fetchTimelineSuccess({ type, id, json}) {
  const normalized = normalize(json, schema.timeline);
  return {
    type: FETCH_TIMELINE_SUCCESS,
    payload: {
      type,
      id,
    },
    entities: normalized.entities,
  };
}

export function fetchTimeline(type, { id = type }) {
  const fetchTypeMap = {
    likes: () => api.fetchLikes()
      .then(json => ({
        id: 'likes',
        tracks: json,
      })),
    playlist: () => api.fetchPlaylist(id),
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

    apiCall(id)
      .then((json) => {
        dispatch(fetchTimelineSuccess({
          type,
          id,
          json,
        }));
      });
  };
}
