import { feedById, trackIndex } from 'scenes/tracksFeed/selectors';
import { unqueue } from 'data/queue/actions';

export const TOGGLE_TRACK = 'TOGGLE_TRACK';
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';

export const NEXT = 'next';
export const PREV = 'prev';

export function toggleTrack({ trackId, isPlaying = true, feedId, ...props }) {
  return {
    type: TOGGLE_TRACK,
    payload: {
      trackId,
      isPlaying,
      feedId,
      ...props,
    },
  };
}

export function changeTrack(changeType) {
  return (dispatch, getState) => {
    const state = getState();
    const { player, queue } = state.data;
    const { activeFeedId, activeTrackId, previousTrackId } = player;

    const currentFeed = feedById(state.feeds, activeFeedId);
    const currentTrackIndex = trackIndex(
      currentFeed,
      previousTrackId || activeTrackId,
    );
    if (changeType === PREV) {
      const nextTrackId =
        currentFeed.trackIds[currentTrackIndex - 1] || currentFeed.trackIds[0]; // start over if there's no tracks
      dispatch(
        toggleTrack({
          trackId: nextTrackId,
          isPlaying: player.isPlaying,
        }),
      );
      return;
    }

    if (queue.length) {
      const nextTrackId = queue[0].trackId;
      dispatch(unqueue()); // Remove the track from queue
      dispatch(
        toggleTrack({
          trackId: nextTrackId,
          previousTrackId: previousTrackId || activeTrackId, // Never replace the prev track on queue
          isPlaying: player.isPlaying,
        }),
      );
      return;
    }

    const nextTrackId =
      currentFeed.trackIds[currentTrackIndex + 1] || currentFeed.tracksIds[0]; // start over if there's no tracks

    dispatch(
      toggleTrack({
        trackId: nextTrackId,
        isPlaying: player.isPlaying,
      }),
    );
  };
}

export function togglePlaying(toggle) {
  return {
    type: TOGGLE_PLAYING,
    payload: toggle,
  };
}
