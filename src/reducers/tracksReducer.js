import { FETCH_TIMELINE_SUCCESS } from 'actions/timelineActions';

// map for tracks and their ids
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TIMELINE_SUCCESS: {
      const tracks = action.payload.data;

      const tracksMap = tracks.reduce(
        (result, track) => ({
          ...result,
          [track.id]: track,
        }), {});
      return {
        ...state,
        ...tracksMap,
      };
    }
    default:
      return state;
  }
};
