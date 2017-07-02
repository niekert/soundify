import { createSelector } from 'reselect';
import { timelinesSelector } from './timeline';

export const activeTimeline = createSelector(
  timelinesSelector,
  state => state.data.player.activeFeedId,
  (timelines, activeFeedId) => timelines[activeFeedId],
);
