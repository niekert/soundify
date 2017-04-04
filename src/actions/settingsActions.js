export const SET_VOLUME = 'SET_VOLUME';

export function setVolume(percentage) {
  return {
    type: SET_VOLUME,
    payload: percentage,
  };
}
