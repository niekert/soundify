import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { OK } from 'app-constants';
import { fetchProfile, fetchProfileFeed } from 'data/users/actions';

const actions = {
  fetchProfile,
  fetchProfileFeed,
};

const enhance = compose(
  connect(null, actions),
  lifecycle({
    componentDidMount() {
      window.requestIdleCallback(() => {
        this.props.fetchProfile(this.props.userId);
      });
    },
    componentWillReceiveProps(nextProps) {
      if (nextProps.userId !== this.props.userId && nextProps.status !== OK) {
        nextProps.fetchProfile(nextProps.userId);
      }
    },
  }),
);

export default () => enhance;
