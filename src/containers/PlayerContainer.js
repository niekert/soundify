import React, { PureComponent, PropTypes } from 'react';
import Player from 'components/Player/Player';
import { togglePlaying, changeTrack } from 'actions/playerActions';
import { trackById } from 'selectors/tracks';
import { connect } from 'react-redux';

class Playercontainer extends PureComponent {
  static propTypes = {
    togglePlaying: PropTypes.func.isRequired,
    changeTrack: PropTypes.func.isRequired,
    active: PropTypes.bool,
    track: PropTypes.object,
    isPlaying: PropTypes.bool
  };

  render() {
    return <Player {...this.props}/>;
  }
}

function mapStateToProps(state, ownProps) {
  const { active, isPlaying } = state.player;

  return {
    active,
    isPlaying,
    track: trackById(state.entities, state.player.activeTrackId),
  };
}

export default connect(mapStateToProps, {
  togglePlaying,
  changeTrack,
})(Playercontainer);
