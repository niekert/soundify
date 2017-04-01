import {
  CHANGE_QUERY,
  START_SEARCH,
  SEARCH_RESULT_SUCCESS,
  SEARCH_RESULT_ERROR
} from 'actions/searchActions';
import { INITIAL, PENDING, OK, ERROR } from 'constants';

const defaultState = {
  query: '',
  status: INITIAL,
  results: {},
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case CHANGE_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case START_SEARCH:
      return {
        ...state,
        status: PENDING,
        query: action.payload,
      };
    case SEARCH_RESULT_ERROR:
      return {
        ...state,
        status: ERROR,
        error: action.payload,
      };
    case SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        status: OK,
        results: {
          ...state.results,
          [action.payload.query]: action.payload.tracks,
        },
      };
    default:
      return state;
  }
}


