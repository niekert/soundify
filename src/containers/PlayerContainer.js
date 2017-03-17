import React, { PureComponent, PropTypes } from 'react';
import Player from 'components/Player/Player';
import { togglePlaying } from 'actions/playerActions';
import { trackById } from 'selectors/tracks';
import { connect } from 'react-redux';

class Playercontainer extends PureComponent {
  static propTypes = {
    active: PropTypes.bool,
    track: PropTypes.object,
    isPlaying: PropTypes.bool
  }
  render() {
    return <Player {...this.props}/>;
  }
}

function mapStateToProps(state, ownProps) {
  const { active, isPlaying } = state.player;

  return {
    active,
    isPlaying,
    track: trackById(state.tracks, state.player.activeTrackId)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    togglePlaying: toggle => dispatch(togglePlaying(toggle))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playercontainer);
