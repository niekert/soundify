import {
  FETCH_TIMELINE,
  FETCH_TIMELINE_SUCCESS,
  FETCH_TIMELINE_ERROR,
  SET_ACTIVE_TIMELINE,
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
        ...action.payload.timeline,
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

const defaultState = {
  timelines: {},
  active: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TIMELINE:
    case FETCH_TIMELINE_SUCCESS:
    case FETCH_TIMELINE_ERROR:
      return {
        ...state,
        timelines: {
          ...state.timelines,
          [action.payload.id]: timeline(state.timelines[action.payload.id], action),
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
