import { QUEUE_TRACK, MOVE_TRACK, REMOVE_TRACK, UNQUEUE } from 'actions/queueActions';
import update from 'immutability-helper';

export default function (state = [], action) {
  switch (action.type) {
    case QUEUE_TRACK: {
      return [
        ...state,
        {
          id: action.payload.id,
          trackId: action.payload.trackId,
        },
      ];
    }
    case REMOVE_TRACK: {
      return state
        .filter(item => item.id !== action.payload);
    }
    case UNQUEUE: {
      return state.slice(1);
    }
    case MOVE_TRACK: {
      const { queueItemId, nextIndex } = action.payload;
      const queueItem = state.find(item => item.id === queueItemId);
      const currentIndex = state.indexOf(queueItem);

      return update(state, {
        $splice: [
          [currentIndex, 1],
          [nextIndex, 0, queueItem],
        ],
      });
    }
    default: {
      return state;
    }
  }
}
