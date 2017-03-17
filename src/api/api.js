import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URL } from 'constants';

const localstorageKey = 'authToken';

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

    return fetch(`//api.soundcloud.com/me?oauth_token=${this.token}`)
      .then(resp => resp.json());
  },

  authCallback(location) {
    SC.connectCallback.call({ location }); // hacky but works lol
  },

  setToken(token) {
    this.token = token;
  },

  fetchLikes() {
    return fetch(`https://api.soundcloud.com/me/favorites?oauth_token=${this.token}`)
      .then(response => response.json());
  },

};

export default api;
