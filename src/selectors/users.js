import { get } from 'lodash';

export const playlists = (users = {}, userId) =>
  get(users, [userId, 'playlists'], []);
