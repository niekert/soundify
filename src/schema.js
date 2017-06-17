import { schema } from 'normalizr';

export const track = new schema.Entity('tracks');
export const user = new schema.Entity('user');

export const arrayOfTracks = new schema.Array(track);

export const timeline = new schema.Object({
  tracks: arrayOfTracks,
});

export const extractFeed = (entityKey, trackIds, next) => ({
  [entityKey]: {
    trackIds,
    next,
  },
});
