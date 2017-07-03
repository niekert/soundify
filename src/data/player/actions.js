import { feedById, trackIdByIndex } from 'scenes/tracksFeed/selectors';
import { unqueue } from 'data/queue/actions';

export const TOGGLE_TRACK = 'TOGGLE_TRACK';
export const PLAY_TRACK = 'PLAY_TRACK';
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';

export const NEXT_TRACK = 'NEXT_TRACK';
export const PREV_TRACK = 'PREV_TRACK';
export const PLAY_QUEUED_TRACK = 'PLAY_QUEUED_TRACK';

export const NEXT = 'next';
export const PREV = 'prev';

export function playTrack({ feedId, indexInFeed, trackId }) {
  return {
    type: PLAY_TRACK,
    payload: {
      feedId,
      trackId,
      indexInFeed,
    },
  };
}

export function prevTrack() {
  return {
    type: PREV_TRACK,
  };
}

export function nextTrack() {
  return (dispatch, getState) => {
    const state = getState();
    const { player, queue } = state.data;
    const { activeFeedId, indexInFeed, prevTracksHistory } = player;

    if (queue.length) {
      const nextTrackId = queue[0].trackId;
      dispatch(unqueue()); // Remove the track from queue

      dispatch({
        type: NEXT_TRACK,
        payload: {
          trackId: nextTrackId,
        },
      });
      return;
    }

    const [lastPrevTrackId, ...trackHistory] = prevTracksHistory;
    if (lastPrevTrackId) {
      dispatch({
        type: NEXT_TRACK,
        payload: {
          trackId: lastPrevTrackId,
          prevTracksHistory: trackHistory,
        },
      });
      return;
    }

    const nextIndexInFeed = indexInFeed + 1;
    dispatch({
      type: NEXT_TRACK,
      payload: {
        trackId: trackIdByIndex(state, activeFeedId, nextIndexInFeed),
        indexInFeed: nextIndexInFeed,
      },
    });
  };
}

export function changeTrack(changeType) {
  if (changeType === NEXT) {
    nextTrack();
  }
}

export function togglePlaying(toggle) {
  return {
    type: TOGGLE_PLAYING,
    payload: toggle,
  };
}
