import { connect } from 'react-redux';
import { toggleFollowing } from 'actions/authActions';
import { getUser } from '../selectors';
import ProfileHeader from '../components/ProfileHeader';

function mapStateToProps(state, { userId }) {
  const user = getUser(state, userId);
  const me = state.auth.user;

  const {
    username,
    followers_count: followersCount,
    followings_count: followingCount,
    track_count: tracksCount,
    full_name: fullName,
    avatar_url: avatarUrl,
    city,
    description,
  } = user;

  return {
    username,
    isFollowing: me.followings.includes(parseInt(userId, 10)),
    followersCount,
    followingCount,
    fullName,
    avatarUrl,
    tracksCount,
    city,
    description,
    userId: parseInt(userId, 10),
  };
}

const actions = {
  toggleFollowing,
};

export default connect(mapStateToProps, actions)(ProfileHeader);
