import { connect } from 'react-redux';
import { toggleFollowing } from 'actions/authActions';
import FollowButton from './components';

function mapStateToProps(state, { userId }) {
  const me = state.auth.user;

  return {
    isFollowing: me.followings.includes(parseInt(userId, 10)),
  };
}

const actions = {
  toggleFollowing,
};

export default connect(mapStateToProps, actions)(FollowButton);
