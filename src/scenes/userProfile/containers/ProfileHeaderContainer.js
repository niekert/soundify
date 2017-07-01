import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../selectors';
import ProfileHeader from '../components/ProfileHeader';

function mapStateToProps(state, { userId }) {
  const user = getUser(state, userId);
  const {
    username,
    followers_count: followers,
    followings_count: following,
    track_count: tracksCount,
    full_name: fullName,
    avatar_url: avatarUrl,
    city,
    description,
  } = user;

  console.log('user is', user);

  return {
    username,
    followers,
    following,
    fullName,
    avatarUrl,
    tracksCount,
    city,
    description,
    userId,
  };
}

const actions = {
  bla: () => {},
};

export default connect(mapStateToProps, actions)(ProfileHeader);
