import { arrayOfComments } from 'schema';
import { normalize } from 'normalizr';
import { fetchTrackComments } from './api';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = `${FETCH_COMMENTS}_SUCCESS`;
export const FETCH_COMMENTS_ERROR = `${FETCH_COMMENTS}_ERROR`;

const normalizeResponse = response => normalize(response, arrayOfComments);

export function fetchComments(trackId) {
  return dispatch => {
    dispatch({
      type: FETCH_COMMENTS,
      payload: {
        trackId,
      },
    });

    fetchTrackComments(trackId)
      .then(normalizeResponse)
      .then(({ result: commentIds, entities }) =>
        dispatch({
          type: FETCH_COMMENTS_SUCCESS,
          payload: {
            trackId,
            commentIds,
          },
          entities,
        }),
      )
      .catch(error =>
        dispatch({
          type: FETCH_COMMENTS_ERROR,
          payload: {
            trackId,
            error,
          },
        }),
      );
  };
}

export function postComment(trackId, comment, timestamp) {}
