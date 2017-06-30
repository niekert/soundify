import { STATUS_INITIAL } from 'app-constants';
import { createSelector } from 'reselect';

const getFeed = (state, props) => state.feeds[props.feedId];
const getTracks = state => state.entities.tracks;

export function makeFeedSelector() {
  return createSelector([getFeed, getTracks], (feed, tracks) => ({
    hasNext: feed && !!feed.next,
    status: feed ? feed.status : STATUS_INITIAL,
    next: feed.next,
    tracks: feed.trackIds.map(trackId => tracks[trackId]),
  }));
}
