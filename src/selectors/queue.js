import { createSelector } from 'reselect';
import { tracksSelector } from './tracks';

const queuedTrackIds = state => state.queue;

export const queuedTracks = createSelector(
  tracksSelector,
  queuedTrackIds,
  (tracks, trackIds) => trackIds.map(id => tracks[id]),
);
