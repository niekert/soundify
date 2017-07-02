import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { fetchProfile, fetchProfileTracks } from './actions';
import ProfilePage from './components/ProfilePage';
import { userStatus } from './selectors';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.profileId;

  return {
    userId,
    status: userStatus(state, userId),
  };
};

const actions = {
  fetchProfile,
  fetchProfileTracks,
};

const enhance = compose(
  connect(mapStateToProps, actions),
  lifecycle({
    componentDidMount() {
      window.requestIdleCallback(() => {
        this.props.fetchProfile(this.props.userId);
        this.props.fetchProfileTracks(this.props.userId);
      });
    },
  }),
);

export default enhance(ProfilePage);
