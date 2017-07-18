import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchComments, postComment } from './actions';
import TrackComments from './components/TrackComments';

function mapStateToProps(state, { trackId }) {
  return {};
}

const actions = {
  fetchComments,
  postComment,
};

const enhance = compose(
  connect(mapStateToProps, actions),
  lifecycle({
    componentDidMount() {
      this.props.fetchComments(this.props.trackId);
    },
  }),
);

export default enhance(TrackComments);
