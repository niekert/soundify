const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

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


const defaultState = {
  activeModal: null,
  props: null,
};

// Reducer
export default function (state = defaultState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        activeModal: action.payload.type,
        props: action.payload.props,
      };
    case HIDE_MODAL:
      return defaultState;
    default:
      return state;
  }
}
