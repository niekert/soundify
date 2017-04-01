import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URL } from 'constants';
import queryString from 'query-string';

const localstorageKey = 'authToken';
function fetchWithToken(path, token, options = {}) {

  const query = queryString.stringify({
    oauth_token: token,
    ...options.query,
  });

  return fetch(`https://api.soundcloud.com${path}?${query}`);
}

const api = {
  token: window.localStorage.getItem(localstorageKey),

  attemptAuth() {
    SC.initialize({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URL,
    });

    return SC.connect()
      .then(({ oauth_token: token }) => {
        this.token = token;
        window.localStorage.setItem(localstorageKey, token);
        return token;
      });
  },

  fetchUser() {
    if (!this.token) {
      return Promise.reject();
    }

    return fetch(`https://api.soundcloud.com/me?oauth_token=${this.token}`)
      .then(resp => resp.json());
  },

  authCallback(location) {
    SC.connectCallback.call({ location }); // hacky but works lol
  },

  setToken(token) {
    this.token = token;
  },

  fetchPlaylists(userId = 'me') {
    return fetchWithToken(`/users/${userId}/playlists`, this.token)
      .then(resp => resp.json()); // TODO: error handling
  },

  fetchPlaylist(playlistId) {
    return fetchWithToken(`/playlists/${playlistId}`, this.token)
      .then(resp => resp.json()); // TODO: error handling
  },

  fetchLikes() {
    return fetch(`https://api.soundcloud.com/me/favorites?oauth_token=${this.token}`)
      .then(response => response.json()); // TODO: Error handling
  },

  search(query) {
    return fetchWithToken('/tracks', this.token, {
      query: {
        q: query,
      },
    }).then(resp => resp.json());
  },
};

export default api;
