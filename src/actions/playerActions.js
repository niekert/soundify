import { timelineById, trackIndex } from 'selectors/timeline';

export const TOGGLE_TRACK = 'TOGGLE_TRACK';
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export function toggleTrack({ trackId, isPlaying = true, timelineId }) {
  return {
    type: TOGGLE_TRACK,
    payload: {
      trackId,
      isPlaying,
      timelineId,
    },
  };
}

export function changeTrack(changeType) {
  return (dispatch, getState) => {
    const { entities, player } = getState();
    const { activeTimelineId, activeTrackId } = player;

    const timeline = timelineById(entities.timelines, activeTimelineId);
    const currentTrackIndex = trackIndex(timeline, activeTrackId);
    const nextTrackIndexModifier = changeType === PREV ? -1 : 1;
    const nextTrackId = timeline.tracks[currentTrackIndex + nextTrackIndexModifier];

    dispatch(toggleTrack({
      trackId: nextTrackId,
      isPlaying: true,
    }));
  };
}

export function togglePlaying (toggle) {
  return {
    type: TOGGLE_PLAYING,
    payload: toggle,
  };
}
