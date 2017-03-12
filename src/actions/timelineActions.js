export const FETCH_TIMELINE = 'FETCH_TIMELINE';
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS';

export const TIMELINE_TYPE_LIKES = 'likes';

export function fetchLikes (authToken) {
  return dispatch => {
    dispatch(fetchTimeline(TIMELINE_TYPE_LIKES));

    fetch(`https://api.soundcloud.com/me/favorites?oauth_token=${authToken}`)
      .then(response => response.json())
      .then(json => dispatch(fetchTimelineSuccess(TIMELINE_TYPE_LIKES, json)));
  }
}

function fetchTimeline (type) {
  return {
    type: FETCH_TIMELINE,
    payload: type
  };
}

function fetchTimelineSuccess (type, json) {
  return {
    type: FETCH_TIMELINE_SUCCESS,
    payload: {
      type,
      data: json
    }
  };
}
