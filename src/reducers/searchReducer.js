import {
  CHANGE_QUERY,
  START_SEARCH,
  SEARCH_RESULT_SUCCESS,
} from 'actions/searchActions';
import { STATUS_INITIAL, STATUS_PENDING, STATUS_OK, STATUS_ERROR } from 'constants';

const defaultState = {
  query: '',
  status: STATUS_INITIAL,
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
        status: STATUS_PENDING,
        query: action.payload,
      };
    case SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        status: STATUS_OK,
        results: {
          ...state.results,
          [action.payload.query]: action.payload.tracks,
        },
      };
    default:
      return state;
  }
}


