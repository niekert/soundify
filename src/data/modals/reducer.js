import { SHOW_MODAL, HIDE_MODAL } from './actions';

const defaultState = {
  activeModal: null,
  props: null,
};

export default function(state = defaultState, action) {
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
