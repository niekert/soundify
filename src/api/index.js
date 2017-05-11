import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URL } from 'app-constants';
import queryString from 'query-string';

const localstorageKey = 'authToken';

export default {
  token: window.localStorage.getItem(localstorageKey),

  fetchWithToken(path, options = {}) {
    const { query, ...fetchOptions } = options;

    const searchQuery = queryString.stringify({
      oauth_token: this.token,
      ...query,
    });

    return fetch(
      `https://api.soundcloud.com${path}?${searchQuery}`,
      fetchOptions,
    );
  },

  attemptAuth() {
    SC.initialize({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URL,
    });

    return SC.connect().then(({ oauth_token: token }) => {
      this.token = token;
      window.localStorage.setItem(localstorageKey, token);
      return token;
    });
  },

  fetchUser() {
    if (!this.token) {
      return Promise.reject();
    }

    return fetch(
      `https://api.soundcloud.com/me?oauth_token=${this.token}`,
    ).then(resp => resp.json());
  },

  authCallback(location) {
    SC.connectCallback.call({ location }); // hacky but works lol
  },

  setToken(token) {
    this.token = token;
  },

  fetchPlaylists(userId = 'me') {
    return this.fetchWithToken(`/users/${userId}/playlists`).then(resp =>
      resp.json(),
    ); // TODO: error handling
  },

  fetchPlaylist(playlistId) {
    return this.fetchWithToken(`/playlists/${playlistId}`).then(resp =>
      resp.json(),
    ); // TODO: error handling
  },

  fetchLikes() {
    return this.fetchWithToken('/me/favorites', {
      query: {
        linked_partitioning: 1,
      },
    }).then(resp => resp.json());
  },

  search(query) {
    return this.fetchWithToken('/tracks', {
      query: {
        q: query,
        linked_partitioning: 1,
      },
    }).then(resp => resp.json());
  },

  fetchStream() {
    return this.fetchWithToken('/me/activities', {
      query: {
        linked_partitioning: 1,
      },
    }).then(resp => resp.json());
  },

  fetchNext(fullUrl) {
    const [url, search] = fullUrl.split('?'); // TODO: this is probably not reliable
    const params = queryString.parse(search);
    const searchParams = {
      ...params,
      oauth_token: this.token,
    };

    return fetch(`${url}?${queryString.stringify(searchParams)}`).then(resp =>
      resp.json(),
    );
  },

  fetchTrack(trackId) {
    return this.fetchWithToken(`/tracks/${trackId}`).then(resp => resp.json());
  },

  toggleLike(trackId, toggle) {
    return this.fetchWithToken(`/me/favorites/${trackId}`, {
      method: toggle ? 'PUT' : 'DELETE',
    }).then(resp => resp.json());
  },

  logout() {
    this.token = undefined;
    window.localStorage.removeItem(localstorageKey);
  },

  addPlaylist(title) {
    return this.fetchWithToken('/users/me/playlists.json', {
      method: 'POST',
      headers: {
        Authorization: this.token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playlist: {
          title,
          tracks: [],
        },
      }),
    }).then(resp => resp.json());
  },
};
