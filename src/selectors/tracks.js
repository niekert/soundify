export const tracksByIds = (entities, trackIds) => {
  return trackIds.map(trackId => entities.tracks[trackId]);
}

export const trackById = (entities, trackId) => entities.tracks[trackId];
