export const TOGGLE_TRACK = 'TOGGLE_TRACK';
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';

export function toggleTrack (trackId, isPlaying = true) {
  return {
    type: TOGGLE_TRACK,
    payload: {
      trackId,
      isPlaying,
    },
  };
}

export function togglePlaying (toggle) {
  return {
    type: TOGGLE_PLAYING,
    payload: toggle,
  };
}
