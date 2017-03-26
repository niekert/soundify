import { QUEUE_TRACK, MOVE_TRACK, REMOVE_TRACK, UNQUEUE } from 'actions/queueActions';

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
    default: {
      return state;
    }
  }
}
