import { schema } from 'normalizr';

export const track = new schema.Entity('tracks');
export const arrayOfTracks = new schema.Array(track);

export const timeline = new schema.Object({
  tracks: arrayOfTracks,
});
