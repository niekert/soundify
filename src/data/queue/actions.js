import uuidV4 from 'uuid/v4';

export const QUEUE_TRACK = 'QUEUE_TRACK';
export const MOVE_TRACK = 'MOVE_TRACK';
export const UNQUEUE = ' UNQUEUE';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export function queueTrack(trackId) {
  return {
    type: QUEUE_TRACK,
    payload: {
      id: uuidV4(),
      trackId,
    },
  };
}

export function changeQueue(queueItemId, nextIndex) {
  return {
    type: MOVE_TRACK,
    payload: {
      queueItemId,
      nextIndex,
    },
  };
}

export function removeFromQueue(queueItemId) {
  return {
    type: REMOVE_TRACK,
    payload: queueItemId,
  };
}

export function unqueue() {
  return {
    type: UNQUEUE,
  };
}
