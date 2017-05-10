import { get } from 'lodash';
import { createSelector } from 'reselect';
import { tracksSelector } from './tracks';

export const timelinesSelector = state => state.timeline.timelines;
export const activeTimelineIdSelector = state => state.timeline.active;

export const activeTimeline = createSelector(
  timelinesSelector,
  activeTimelineIdSelector,
  (timelines, activeTimelineId) => timelines[activeTimelineId],
);

export const activeTimelineTracks = createSelector(
  tracksSelector,
  activeTimeline,
  (tracks, timeline) =>
    get(timeline, 'tracks', [])
      .map(trackId => tracks[trackId])
      .filter(track => track.streamable && track.kind === 'track'),
);

export const activeTimelineHasNext = createSelector(
  activeTimeline,
  timeline => get(timeline, 'next', false),
);

export const timelineById = (state, id) => timelinesSelector(state)[id];
export const trackIndex = (timeline, trackId) => timeline.tracks.findIndex(id => id === trackId);
