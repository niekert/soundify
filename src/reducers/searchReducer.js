import {
  CHANGE_QUERY,
  START_SEARCH,
  SEARCH_RESULT_SUCCESS
} from 'actions/searchActions';

const defaultState = {
  query: '',
  results: {}
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
        query: action.payload,
      };
    case SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.query]: action.payload.tracks,
        },
      };
    default:
      return state;
  }
}


