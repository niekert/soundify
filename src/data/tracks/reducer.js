import { OK } from 'app-constants';
import { FETCH_TRACK_SUCCESS, FETCH_TRACK } from './actions';

// Keeps track of the status of track.
// The actual track is saved in entities reducer
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TRACK: {
      const { trackId, status } = action.payload;
      return {
        ...state,
        [trackId]: {
          status,
        },
      };
    }
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
