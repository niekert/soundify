import React from 'react';
import { func, bool } from 'prop-types';
import Player from 'components/Player/Player';
import { togglePlaying, changeTrack, NEXT, PREV } from 'actions/playerActions';
import { toggleLike } from 'actions/trackActions';
import { trackById } from 'selectors/tracks';
import { connect } from 'react-redux';

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
  toggleLike,
})(Player);
