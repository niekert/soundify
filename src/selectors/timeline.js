export const timelinesSelector = state => state.timelines;

export const timelineById = (state, id) => state.timelines[id];
export const trackIndex = (timeline, trackId) => timeline.tracks.findIndex(id => id === trackId);
