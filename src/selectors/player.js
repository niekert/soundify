import { createSelector } from 'reselect';
import { timelinesSelector } from './timeline';

export const activeTimeline = createSelector(
  timelinesSelector,
  state => state.data.player.activeFeedId,
  (timelines, activeFeedId) => timelines[activeFeedId],
);

const playerSelector = state => state.data.player;

export const playerContext = createSelector(
  playerSelector,
  ({ isPlaying, activeTrackId, activeFeedId }) => ({
    isPlaying,
    activeTrackId,
    activeFeedId,
  }),
);
