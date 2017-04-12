import { createSelector } from 'reselect';

export const timelinesSelector = state => state.timeline.timelines;
export const activeTimelineIdSelector = state => state.timeline.active;

export const activeTimeline = createSelector(
  timelinesSelector,
  activeTimelineIdSelector,
  (timelines, activeTimelineId) => timelines[activeTimelineId],
);

export const timelineById = (state, id) => timelinesSelector(state)[id];
export const trackIndex = (timeline, trackId) => timeline.tracks.findIndex(id => id === trackId);
