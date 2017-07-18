import { schema } from 'normalizr';

export const track = new schema.Entity('tracks');
export const user = new schema.Entity('user');
export const comment = new schema.Entity('comments');

export const arrayOfComments = new schema.Array(comment);
export const arrayOfTracks = new schema.Array(track);
export const arrayOfUsers = new schema.Array(user);

export const timeline = new schema.Object({
  tracks: arrayOfTracks,
});

export const me = {
  followings: arrayOfUsers,
};
