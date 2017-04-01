import { FETCH_PLAYLISTS_SUCCESS } from 'actions/userActions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCESS: {
      const { userId, playlists } = action.payload;

      return {
        ...state,
        [userId]: {
          ...state[userId],
          playlists,
        },
      };
    }
    default:
      return state;
  }
}
