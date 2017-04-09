import { merge } from 'lodash';

const defaultEntities = {
  tracks: {},
};

export default (state = defaultEntities, action) => {
  if (action.entities) {
    return merge({}, state, action.entities);
  }

  return state;
};
