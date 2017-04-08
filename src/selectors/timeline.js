export const timelineById = (state, id) => {
  const timeline = state.timelines[id];
  if (!timeline) {
    return null;
  }

  return {
    ...timeline,
    ...state.entities.timelines[timeline.timelineId],
  };
};
export const trackIndex = (timeline, trackId) => timeline.tracks.findIndex(id => id === trackId);
