import { createSelector } from 'reselect';
import { timelinesSelector } from './timeline';

export const activeTimeline = createSelector(
  timelinesSelector,
  state => state.data.player.activeTimelineId,
  (timelines, activeTimelineId) => timelines[activeTimelineId],
);
