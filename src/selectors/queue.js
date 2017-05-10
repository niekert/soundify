import { createSelector } from 'reselect';
import { tracksSelector } from './tracks';

const queuedItems = state => state.queue;

export const playQueue = createSelector(
  tracksSelector,
  queuedItems,
  (tracks, queueItems) => queueItems.map(queuedItem => ({
    id: queuedItem.id,
    track: tracks[queuedItem.trackId],
  })),
);
