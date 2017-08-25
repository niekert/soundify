import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { OK, INITIAL } from 'app-constants';
import { fetchProfile, fetchProfileFeed } from 'data/users/actions';
import ProfilePage from './components/ProfilePage';
import { userStatus } from './selectors';

const mapStateToProps = (state, ownProps) => {
  const { profileId, feedId = 'tracks' } = ownProps.match.params;
  const userId = parseInt(profileId, 10); // as numbers in the api response

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
      if (nextProps.userId !== this.props.userId && nextProps.status !== OK) {
        nextProps.fetchProfile(nextProps.userId);
        nextProps.fetchProfileFeed(nextProps.userId, nextProps.feedId);
      } else if (
        nextProps.feedId !== this.props.feedId &&
        nextProps.feedStatus !== OK
      ) {
        nextProps.fetchProfileFeed(nextProps.userId, nextProps.feedId);
      }
    },
  }),
);

export default enhance(ProfilePage);
