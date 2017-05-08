import {
  FETCH_PLAYLISTS_SUCCESS,
  ADD_PLAYLIST,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_ERROR,
} from 'actions/playlistActions';
import { INITIAL, PENDING, OK, ERROR } from 'app-constants';

const initialState = {
  status: INITIAL,
  error: '',
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCESS: {
      const { playlists } = action.payload;
      return {
        ...state,
        data: playlists,
      };
    }
    case ADD_PLAYLIST: {
      return {
        ...state,
        error: null,
        status: PENDING,
      };
    }
    case ADD_PLAYLIST_ERROR: {
      return {
        ...state,
        status: ERROR,
        error: action.payload.error,
      };
    }
    case ADD_PLAYLIST_SUCCESS: {
      return {
        status: OK,
        error: null,
        data: [...state.data, action.payload],
      };
    }
    default:
      return state;
  }
}
