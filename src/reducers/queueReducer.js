import { QUEUE_TRACK, MOVE_TRACK, REMOVE_TRACK, UNQUEUE } from 'actions/queueActions';
import update from 'immutability-helper';

export default function (state = [], action) {
  switch (action.type) {
    case QUEUE_TRACK: {
      return [
        ...state,
        action.payload,
      ];
    }
    case REMOVE_TRACK: {
      return state
        .slice(0, action.payload)
        .concat(state.slice(action.payload + 1));
    }
    case UNQUEUE: {
      return state.slice(1);
    }
    case MOVE_TRACK: {
      const { currentIndex, nextIndex } = action.payload;
      const currentTrackId = state[currentIndex];
      return update(state, {
        $splice: [
          [currentIndex, 1],
          [nextIndex, 0, currentTrackId],
        ],
      });
    }
    default: {
      return state;
    }
  }
}
