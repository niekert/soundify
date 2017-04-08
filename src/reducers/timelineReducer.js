import {
  FETCH_TIMELINE,
  FETCH_TIMELINE_SUCCESS,
  FETCH_TIMELINE_ERROR,
} from 'actions/timelineActions';
import { OK, PENDING, ERROR } from 'constants';

const emptyTimeline = {
  error: null,
  status: PENDING,
};

const timeline = (state = emptyTimeline, action) => {
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
        status: OK,
      };
    case FETCH_TIMELINE_ERROR:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TIMELINE:
      return {
        ...state,
        [action.payload.id]: timeline(state[action.payload.id], action),
      };
    case FETCH_TIMELINE_SUCCESS:
      return {
        ...state,
        [action.payload.id]: timeline(state[action.payload.id], action),
      };
    case FETCH_TIMELINE_ERROR:
      return {
        ...state,
        [action.payload.id]: timeline(state[action.payload.id], action),
      };
    default:
      return state;
  }
};
