import api from 'api';
import { normalize } from 'normalizr';
import { arrayOfTracks } from 'schema';

export const SAVE_FEED = 'SAVE_FEED';
export const FETCH_NEXT = 'FETCH_NEXT';
export const FETCH_NEXT_SUCCESS = 'FETCH_NEXT_SUCCESS';

export function saveFeed(feedId, trackIds, next) {
  return {
    type: SAVE_FEED,
    payload: {
      feedId,
      trackIds,
      next,
    },
  };
}

export function fetchNext(feedId, nextUrl) {
  return dispatch => {
    api.fetchNext(nextUrl).then(resp => {
      let tracks = resp.collection;

      if (feedId === 'stream') {
        // TODO: remove this when an ACTUAL stream feed is implemented
        tracks = resp.collection
          .map(item => item.origin)
          .filter(item => !!item && item.kind === 'track');
      }

      const normalized = normalize(tracks, arrayOfTracks);
      dispatch({
        type: FETCH_NEXT_SUCCESS,
        payload: {
          feedId,
          next: resp.next_href,
          trackIds: normalized.result,
        },
        entities: normalized.entities,
      });
    });

    dispatch({
      type: FETCH_NEXT,
      payload: {
        id: feedId,
      },
    });
  };
}
