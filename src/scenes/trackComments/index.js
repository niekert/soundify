import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { fetchComments, postComment } from './actions';
import TrackComments from './components/TrackComments';

function mapStateToProps(state, props) {
  return {};
}

const actions = {
  fetchComments,
  postComment,
};

export default connect(mapStateToProps, actions)(TrackComments);
