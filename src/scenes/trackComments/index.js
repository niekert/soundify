import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { INITIAL } from 'app-constants';
import { fetchComments, postComment } from './actions';
import TrackComments from './components/TrackComments';

function mapStateToProps(state, { trackId }) {
  const { status = INITIAL, commentIds = [] } =
    state.comments.get(trackId) || {};

  return {
    status,
    comments: commentIds.map(commentId => state.entities.comments[commentId]),
    trackId,
  };
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
