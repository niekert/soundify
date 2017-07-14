export const SET_VOLUME = 'SET_VOLUME';
export const TOGGLE_SIDEBAR_PROFILE_PIN = 'TOGGLE_SIDEBAR_PROFILE_PIN';

export function setVolume(percentage) {
  return {
    type: SET_VOLUME,
    payload: percentage,
  };
}

export function toggleSidebarPin(userId, userName) {
  return {
    type: TOGGLE_SIDEBAR_PROFILE_PIN,
    payload: {
      userId,
      userName,
    },
  };
}
