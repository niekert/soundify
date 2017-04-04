import { SET_VOLUME } from 'actions/settingsActions';

const defaultState = {
  volumePercentage: 100, // TODO: use redux-localstorage
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_VOLUME:
      return {
        ...state,
        volumePercentage: action.payload,
      };
    default:
      return state;
  }
}
