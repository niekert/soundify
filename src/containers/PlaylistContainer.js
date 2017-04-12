import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { INITIAL, OK } from 'constants';
import { fetchPlaylist } from 'actions/timelineActions';
import { timelineById } from 'selectors/timeline';
import withUser from 'containers/hocs/withUser';
import Playlist from '../components/Playlist/Playlist';

class PlaylistContainer extends PureComponent {
  static propTypes = {
    playlist: PropTypes.object,
    match: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
    fetchPlaylist: PropTypes.func.isRequired,
  };

  static defaultProps = {
    playlist: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.props.fetchPlaylist(id);
  }

  componentWillReceiveProps(nextProps) {
    const { playlistType, id: nextId } = nextProps.match.params;
    const { id: currentId, playlistType: currentType } = this.props.match.params;
    if (
      (playlistType !== currentType ||
      nextId !== currentId) &&
      nextProps.status === INITIAL
    ) {
      this.props.fetchPlaylist(nextId);
    }
  }

  render() {
    const {
      playlist,
      status,
      match,
     } = this.props;

    return (
      <Playlist
        playlist={playlist}
        status={status}
        timelineId={`playlist::${match.params.id}`}
        type={match.params.id || match.params.playlistType}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { match } = ownProps;
  const { id } = match.params;

  const playlist = timelineById(state, `playlist::${id}`);

  return {
    playlist,
    status: playlist ? playlist.status : INITIAL,
  };
}

export default withUser(connect(mapStateToProps, {
  fetchPlaylist,
})(PlaylistContainer));
