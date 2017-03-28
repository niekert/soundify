import api from 'api/api';
import { normalize } from 'normalizr';
import * as schema from './schema';

export const CHANGE_QUERY = 'CHANGE_QUERY';
export const START_SEARCH = 'START_SEARCH';
export const SEARCH_RESULT_SUCCESS = 'SEARCH_RESULT_SUCCESS';

export function submitSearch(query) {
  return (dispatch) => {
    dispatch({
      type: START_SEARCH,
      payload: query,
    });

    api.search(query)
      .then((json) => {
        const normalized = normalize(json, schema.arrayOfTracks);
        dispatch({
          type: SEARCH_RESULT_SUCCESS,
          payload: {
            query,
            tracks: normalized.result,
          },
          entities: normalized.entities,
        });
      });
  };
}

export function onChange(query) {
  return {
    type: CHANGE_QUERY,
    payload: query,
  };
}