import React from 'react';
import Player from 'components/Player/Player';
import { togglePlaying, changeTrack } from 'actions/playerActions';
import { trackById } from 'selectors/tracks';
import { connect } from 'react-redux';

const PlayerContainer = props => <Player {...props} />;

function mapStateToProps(state) {
  const { isPlaying, activeTrackId, active } = state.player;
  const { volumePercentage } = state.settings;

  return {
    isPlaying,
    isActive: active,
    track: trackById(state.entities, activeTrackId),
    volume: volumePercentage,
  };
}

export default connect(mapStateToProps, {
  togglePlaying,
  changeTrack,
})(PlayerContainer);
