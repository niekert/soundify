import api from 'api';
import { normalize } from 'normalizr';
import { saveFeed } from 'scenes/tracksFeed/actions';
import * as schema from 'schema';

export const FETCH_TIMELINE = 'FETCH_TIMELINE';
export const SET_ACTIVE_TIMELINE = 'SET_ACTIVE_TIMELINE';
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS';
export const FETCH_TIMELINE_ERROR = 'FETCH_TIMELINE_ERROR';

const fetchTimeline = id => ({
  type: FETCH_TIMELINE,
  payload: {
    id,
  },
});

function fetchTimelineSuccess(dispatch, { id, timeline }) {
  const normalized = normalize(timeline, schema.timeline);

  dispatch(saveFeed(id, normalized.result.tracks, normalized.result.next));

  dispatch({
    type: FETCH_TIMELINE_SUCCESS,
    payload: {
      id,
      timeline: normalized.result,
    },
    entities: normalized.entities,
  });
}

export function submitSearch(query) {
  const id = `search::${query}`;
  return dispatch => {
    dispatch(fetchTimeline(id));

    api
      .search(query)
      .then(json => ({
        id,
        type: 'Search',
        title: `Search results for ${decodeURIComponent(query)}`,
        tracks: json.collection,
        next: json.next_href,
      }))
      .then(timeline =>
        fetchTimelineSuccess(dispatch, {
          id,
          timeline,
        }),
      )
      .catch(err =>
        dispatch({
          type: FETCH_TIMELINE_ERROR,
          payload: err.message,
        }),
      );
  };
}

export function fetchLikes() {
  const id = 'likes';
  return dispatch => {
    dispatch({
      type: FETCH_TIMELINE,
      payload: {
        id,
      },
    });

    api
      .fetchLikes()
      .then(json => ({
        id,
        title: 'My Likes',
        next: json.next_href,
        tracks: json.collection,
      }))
      .then(timeline =>
        fetchTimelineSuccess(dispatch, {
          id,
          timeline,
        }),
      )
      .catch(err =>
        dispatch({
          type: FETCH_TIMELINE_ERROR,
          payload: err.message,
        }),
      );
  };
}

export function fetchPlaylist(playlistId) {
  const id = `playlist::${playlistId}`;

  return dispatch => {
    dispatch(fetchTimeline(id));

    api.fetchPlaylist(playlistId).then(json =>
      fetchTimelineSuccess(dispatch, {
        id,
        timeline: json,
      }),
    );
  };
}

export function fetchStream() {
  const id = 'stream';

  return dispatch => {
    dispatch(fetchTimeline(id));
    api
      .fetchStream()
      .then(json => ({
        id,
        title: 'Stream',
        next: json.next_href,
        future: json.next_future,
        tracks: json.collection
          .map(item => item.origin)
          .filter(item => item.kind === 'track'),
      }))
      .then(json =>
        fetchTimelineSuccess(dispatch, {
          id,
          timeline: json,
        }),
      );
  };
}

export const setActiveTimeline = id => ({
  type: SET_ACTIVE_TIMELINE,
  payload: id,
});
