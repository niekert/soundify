import { connect } from 'react-redux';
import { compose } from 'recompose';
import ensureUserProfile from 'hocs/ensureUserProfile';
import ProfileTile from './components';

function mapStateToProps(state, { userId }) {
  const { avatar_url: avatarUrl, username, followers_count: followersCount } =
    state.entities.user[userId] || {};

  return {
    avatarUrl,
    username,
    followersCount,
    userId,
  };
}

const enhance = compose(connect(mapStateToProps), ensureUserProfile);

export default enhance(ProfileTile);
