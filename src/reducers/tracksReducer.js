import {
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK,
} from 'actions/trackActions';
import { PENDING, OK, ERROR } from 'constants';


// Keeps track of the status of track.
// The actual track is saved in entities reducer
export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_TRACK:
      return {
        ...state,
        [action.payload]: {
          status: PENDING,
        },
      };
    case FETCH_TRACK_SUCCESS:
      return {
        ...state,
        [action.payload]: {
          status: OK,
        },
      };
    default:
      return state;
  }
}
