export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const ADD_PLAYLIST_MODAL = 'ADD_PLAYLIST_MODAL';

export function showModal(modalType, props) {
  return {
    type: SHOW_MODAL,
    payload: {
      type: modalType,
      props,
    },
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
