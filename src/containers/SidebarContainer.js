import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar';
import { showModal, ADD_PLAYLIST_MODAL } from 'scenes/modals';
import { fetchPlaylists } from 'actions/playlistActions';
import withUser from 'containers/hocs/withUser';
import { connect } from 'react-redux';

class SidebarContainer extends PureComponent {
  static propTypes = {
    fetchPlaylists: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchPlaylists('me');
  }

  render() {
    return <Sidebar {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists.data,
    activeTimelineId: state.data.player.isPlaying
      ? state.data.player.activeTimelineId
      : undefined,
  };
}

const container = connect(mapStateToProps, {
  fetchPlaylists,
  addPlaylist: () => showModal(ADD_PLAYLIST_MODAL),
})(SidebarContainer);

export default withUser(container, {
  redirect: false,
});
