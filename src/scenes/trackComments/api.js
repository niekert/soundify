import api from 'api';

export function fetchTrackComments(trackId) {
  return api
    .fetchWithToken(`/tracks/${trackId}/comments`)
    .then(resp => resp.json());
}
