import { INITIAL } from 'app-constants';
import { createSelector } from 'reselect';

const getFeed = (state, feedId) => state.feeds[feedId];
const getTracks = state => state.entities.tracks;

export function makeFeedSelector() {
  return createSelector([getFeed, getTracks], (feed, tracks) => {
    if (!feed) {
      return { status: INITIAL };
    }

    const returnVal = {
      hasNext: !!feed.next,
      status: feed.status,
      next: feed.next,
      tracks: feed.trackIds.map(trackId => tracks[trackId]),
    };

    return returnVal;
  });
}

export function feedById(feeds, feedId) {
  return feeds[feedId];
}

export function trackIndex(feed, trackId) {
  return feed.trackIds.findIndex(id => id === trackId);
}
