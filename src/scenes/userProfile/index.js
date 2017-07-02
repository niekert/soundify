import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { OK, INITIAL } from 'app-constants';
import { fetchProfile, fetchProfileFeed } from './actions';
import ProfilePage from './components/ProfilePage';
import { userStatus } from './selectors';

const mapStateToProps = (state, ownProps) => {
  const { profileId: userId, feedId = 'tracks' } = ownProps.match.params;

  const feed = state.feeds[`${userId}::${feedId}`];

  return {
    userId,
    feedId,
    urlBase: `/profile/${userId}`,
    feedStatus: feed ? feed.status : INITIAL,
    status: userStatus(state, userId),
  };
};

const actions = {
  fetchProfile,
  fetchProfileFeed,
};

const enhance = compose(
  connect(mapStateToProps, actions),
  lifecycle({
    componentDidMount() {
      window.requestIdleCallback(() => {
        this.props.fetchProfile(this.props.userId);
        this.props.fetchProfileFeed(this.props.userId, this.props.feedId);
      });
    },
    componentWillReceiveProps(nextProps) {
      if (
        nextProps.feedId !== this.props.feedId &&
        nextProps.feedStatus !== OK
      ) {
        this.props.fetchProfileFeed(nextProps.userId, nextProps.feedId);
      }
    },
  }),
);

export default enhance(ProfilePage);
