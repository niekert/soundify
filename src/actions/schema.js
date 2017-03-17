import { schema } from 'normalizr';

const track = new schema.Entity('tracks');
export const arrayOfTracks = new schema.Array(track);
