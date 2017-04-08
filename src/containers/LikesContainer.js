import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { INITIAL, OK } from 'constants';
import { fetchLikes } from 'actions/timelineActions';
import { timelineById } from 'selectors/timeline';
import withUser from 'containers/hocs/withUser';
import Playlist from '../components/Playlist/Playlist';

class LikesContainer extends PureComponent {
  static propTypes = {
    likes: PropTypes.object,
    status: PropTypes.string.isRequired,
    fetchLikes: PropTypes.func.isRequired,
  };

  static defaultProps = {
    likes: null,
  };

  componentDidMount() {
    this.props.fetchLikes();
  }

  render() {
    const {
      likes,
      status,
     } = this.props;

    return (
      <Playlist
        playlist={likes}
        status={status}
        timelineId="likes" // TODO: don't use Playlist component here
      />
    );
  }
}

function mapStateToProps(state) {
  const likes = timelineById(state, 'likes');

  return {
    likes,
    status: likes ? OK : INITIAL,
  };
}

export default withUser(connect(mapStateToProps, {
  fetchLikes,
})(LikesContainer));
