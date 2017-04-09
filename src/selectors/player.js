import { createSelector } from 'reselect';
import { timelinesSelector } from './timeline';

export const activeTimeline = createSelector(
  timelinesSelector,
  state => state.player.activeTimelineId,
  (timelines, activeTimelineId) => timelines[activeTimelineId],
);
