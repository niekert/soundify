import api from 'api/api';
import { normalize } from 'normalizr';
import * as schema from './schema';

export const FETCH_TIMELINE = 'FETCH_TIMELINE';
export const SET_ACTIVE_TIMELINE = 'SET_ACTIVE_TIMELINE';
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS';
export const FETCH_TIMELINE_ERROR = 'FETCH_TIMELINE_ERROR';

function fetchTimelineSuccess({ id, timeline }) {
  const normalized = normalize(timeline, schema.timeline);

  return {
    type: FETCH_TIMELINE_SUCCESS,
    payload: {
      id,
      timeline: normalized.result,
    },
    entities: normalized.entities,
  };
}

export function submitSearch(query) {
  const id = `search::${query}`;
  return (dispatch) => {
    dispatch({
      type: FETCH_TIMELINE,
      payload: {
        id,
      },
    });

    api.search(query)
      .then(json => ({
        id,
        tracks: json.collection,
        next: json.next_href,
      }))
      .then(timeline => dispatch(
        fetchTimelineSuccess({
          id,
          timeline,
        }),
      ))
      .catch(err => dispatch({
        type: FETCH_TIMELINE_ERROR,
        payload: err.message,
      }));
  };
}

export function fetchLikes() {
  const id = 'likes';
  return (dispatch) => {
    dispatch({
      type: FETCH_TIMELINE,
      payload: {
        id,
      },
    });

    api.fetchLikes()
      .then(json => ({
        id,
        title: 'My Likes',
        next: json.next_href,
        tracks: json.collection,
      }))
      .then(timeline => dispatch(
        fetchTimelineSuccess({
          id,
          timeline,
        }),
      ))
      .catch(err => dispatch({
        type: FETCH_TIMELINE_ERROR,
        payload: err.message,
      }));
  };
}

export function fetchPlaylist(playlistId) {
  const id = `playlist::${playlistId}`;

  return (dispatch) => {
    dispatch({
      type: FETCH_TIMELINE,
      payload: {
        id,
      },
    });

    api.fetchPlaylist(playlistId)
      .then(json => dispatch(
        fetchTimelineSuccess({
          id,
          timeline: json,
        }),
      ));
  };
}

export const setActiveTimeline = id => ({
  type: SET_ACTIVE_TIMELINE,
  payload: id,
});
