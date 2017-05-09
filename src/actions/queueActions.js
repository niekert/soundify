export const QUEUE_TRACK = 'QUEUE_TRACK';
export const MOVE_TRACK = 'MOVE_TRACK';
export const UNQUEUE = ' UNQUEUE';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export function queueTrack(trackId) {
  return {
    type: QUEUE_TRACK,
    payload: trackId,
  };
}

export function changeQueue(currentIndex, nextIndex) {
  return {
    type: MOVE_TRACK,
    payload: {
      currentIndex,
      nextIndex,
    },
  };
}

export function removeTrack(indexInQueue) {
  return {
    type: REMOVE_TRACK,
    payload: indexInQueue,
  };
}

export function unqueue() {
  return {
    type: UNQUEUE,
  };
}
