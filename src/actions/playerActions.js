import { timelineById, trackIndex } from 'selectors/timeline';
import { unqueue } from 'actions/queueActions';

export const TOGGLE_TRACK = 'TOGGLE_TRACK';
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export function toggleTrack({ trackId, isPlaying = true, timelineId, ...props }) {
  return {
    type: TOGGLE_TRACK,
    payload: {
      trackId,
      isPlaying,
      timelineId,
      ...props,
    },
  };
}

export function changeTrack(changeType) {
  return (dispatch, getState) => {
    const state = getState();
    const { player, queue } = state;
    const { activeTimelineId, activeTrackId, previousTrackId } = player;

    if (queue.length) {
      const nextTrackId = queue[0];
      dispatch(unqueue()); // Remove the track from queue
      dispatch(toggleTrack({
        trackId: nextTrackId,
        previousTrackId: previousTrackId || activeTrackId, // Never replace the prev track on queue
        isPlaying: true,
      }));
      return;
    }

    const timeline = timelineById(state, activeTimelineId);
    const currentTrackIndex = trackIndex(timeline, previousTrackId || activeTrackId);
    const nextTrackIndexModifier = changeType === PREV ? -1 : 1;
    const nextTrackId = timeline.tracks[currentTrackIndex + nextTrackIndexModifier] ||
      timeline.tracks[0]; // start over if there's no tracks

    dispatch(toggleTrack({
      trackId: nextTrackId,
      isPlaying: true,
    }));
  };
}

export function togglePlaying(toggle) {
  return {
    type: TOGGLE_PLAYING,
    payload: toggle,
  };
}
