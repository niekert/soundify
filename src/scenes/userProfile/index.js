import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { fetchProfile } from './actions';
import ProfilePage from './components/ProfilePage';
import { userStatus, user } from './selectors';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.profileId;

  return {
    userId,
    status: userStatus(state, userId),
    user: user(state, userId),
  };
};

const enhance = compose(
  connect(mapStateToProps, { fetchProfile }),
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
