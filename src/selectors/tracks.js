import { createSelector } from 'reselect';

export const tracksSelector = state => state.entities.tracks;

export const makeTracksByIds = trackIds => createSelector(
  tracksSelector,
  tracks => trackIds.map(trackId => tracks[trackId]),
);

export const tracksByIds = (entities, trackIds) => {
  return trackIds.map(trackId => entities.tracks[trackId]);
};

export const trackById = (entities, trackId) => entities.tracks[trackId];
