import React, { PureComponent, PropTypes } from 'react';
import Sidebar from 'components/Sidebar';
import { fetchPlaylists } from 'actions/userActions';
import { playlists } from 'selectors/users';
import withUser from 'containers/hocs/withUser';
import { connect } from 'react-redux';

class SidebarContainer extends PureComponent {
  static propTypes = {
    activeContextId: PropTypes.string,
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
    activeContextId: state.player.activeTimelineId, // TODO: make UI context
  };
}

const container = connect(mapStateToProps, {
  fetchPlaylists,
})(SidebarContainer);

export default withUser(container, {
  redirect: false,
});

