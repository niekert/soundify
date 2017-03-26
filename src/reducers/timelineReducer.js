import {
  FETCH_TIMELINE,
  FETCH_TIMELINE_SUCCESS,
  FETCH_TIMELINE_ERROR,
} from 'actions/timelineActions';
import { STATUS_OK, STATUS_PENDING, STATUS_ERROR } from 'constants';

const emptyTimeline = {
  trackIds: [],
  error: null,
  status: STATUS_PENDING,
};

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_TIMELINE:
      return {
        ...state,
        [action.payload]: emptyTimeline,
      };
    case FETCH_TIMELINE_SUCCESS:
      return {
        ...state,
        [action.payload.type]: {
          trackIds: action.payload.trackIds,
          status: STATUS_OK,
        },
      };
    case FETCH_TIMELINE_ERROR:
      return {
        [action.payload.type]: {
          error: action.payload.data,
          status: STATUS_ERROR,
        },
      };
    default:
      return state;
  }
};
