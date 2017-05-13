import api from 'api';
import { OK, PENDING } from 'app-constants';
import { normalize } from 'normalizr';
import * as schema from 'schema';

export const FETCH_TIMELINE = 'FETCH_TIMELINE';
export const SET_ACTIVE_TIMELINE = 'SET_ACTIVE_TIMELINE';
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS';
export const FETCH_TIMELINE_ERROR = 'FETCH_TIMELINE_ERROR';
export const FETCH_NEXT = 'FETCH_NEXT';
export const FETCH_NEXT_SUCCESS = 'FETCH_NEXT_SUCCESS';

const emptyTimeline = {
  error: null,
  status: PENDING,
};

const timelineReducer = (state = emptyTimeline, action) => {
  switch (action.type) {
    case FETCH_TIMELINE:
      return {
        timelineId: action.payload.id,
        status: PENDING,
        ...state,
      };
    case FETCH_TIMELINE_SUCCESS:
      return {
        ...state,
        ...action.payload.timeline,
        status: OK,
      };
    case FETCH_TIMELINE_ERROR:
      return {
        ...state,
        error: action.payload.data,
      };
    case FETCH_NEXT: {
      return {
        ...state,
        status: PENDING,
        next: '',
      };
    }
    case FETCH_NEXT_SUCCESS: {
      return {
        ...state,
        next: action.payload.next,
        status: OK,
        tracks: [...state.tracks, ...action.payload.tracks],
      };
    }
    default:
      return state;
  }
};

const defaultState = {
  timelines: {},
  active: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TIMELINE:
    case FETCH_TIMELINE_SUCCESS:
    case FETCH_TIMELINE_ERROR:
    case FETCH_NEXT:
    case FETCH_NEXT_SUCCESS:
      return {
        ...state,
        timelines: {
          ...state.timelines,
          [action.payload.id]: timelineReducer(
            state.timelines[action.payload.id],
            action,
          ),
        },
      };
    case SET_ACTIVE_TIMELINE:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};

const fetchTimeline = id => ({
  type: FETCH_TIMELINE,
  payload: {
    id,
  },
});

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
        dispatch(
          fetchTimelineSuccess({
            id,
            timeline,
          }),
        ),
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
        dispatch(
          fetchTimelineSuccess({
            id,
            timeline,
          }),
        ),
      )
      .catch(err =>
        dispatch({
          type: FETCH_TIMELINE_ERROR,
          payload: err.message,
        }),
      );
  };
}

export function fetchNext(timelineId, nextUrl) {
  return dispatch => {
    api.fetchNext(nextUrl).then(resp => {
      let tracks = resp.collection;
      if (timelineId === 'stream') {
        // TODO: solve better
        tracks = resp.collection.map(item => item.origin);
      }

      const normalized = normalize(tracks, schema.arrayOfTracks);
      dispatch({
        type: FETCH_NEXT_SUCCESS,
        payload: {
          id: timelineId,
          next: resp.next_href,
          tracks: normalized.result,
        },
        entities: normalized.entities,
      });
    });

    dispatch({
      type: FETCH_NEXT,
      payload: {
        id: timelineId,
      },
    });
  };
}

export function fetchPlaylist(playlistId) {
  const id = `playlist::${playlistId}`;

  return dispatch => {
    dispatch(fetchTimeline(id));

    api.fetchPlaylist(playlistId).then(json =>
      dispatch(
        fetchTimelineSuccess({
          id,
          timeline: json,
        }),
      ),
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
        tracks: json.collection.map(item => item.origin),
      }))
      .then(json =>
        dispatch(
          fetchTimelineSuccess({
            id,
            timeline: json,
          }),
        ),
      );
  };
}

export const setActiveTimeline = id => ({
  type: SET_ACTIVE_TIMELINE,
  payload: id,
});
