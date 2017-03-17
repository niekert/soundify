export const tracksByIds = (tracks, trackIds) => {
  return trackIds.map(trackId => tracks[trackId]);
}

export const trackById = (tracks, trackId) => tracks[trackId];
