import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar';
import { fetchPlaylists } from 'actions/userActions';
import { playlists } from 'selectors/users';
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
    return (
      <Sidebar {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    playlists: playlists(state.users, 'me'),
    activeTimelineId: state.player.isPlaying && state.player.activeTimelineId,
  };
}

const container = connect(mapStateToProps, {
  fetchPlaylists,
})(SidebarContainer);

export default withUser(container, {
  redirect: false,
});

