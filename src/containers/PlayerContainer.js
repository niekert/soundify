import React from 'react';
import { func, bool } from 'prop-types';
import { compose, lifecycle } from 'recompose';
import Player from 'components/Player/Player';
import { togglePlaying, changeTrack, NEXT, PREV } from 'actions/playerActions';
import { toggleLike, fetchTrack } from 'actions/trackActions';
import { trackById } from 'selectors/tracks';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const { isPlaying, activeTrackId, active } = state.player;
  const { volumePercentage } = state.settings;

  return {
    isPlaying,
    isActive: active,
    trackId: activeTrackId,
    track: trackById(state.entities, activeTrackId),
    volume: volumePercentage,
  };
}

const enhance = compose(
  connect(mapStateToProps, {
    togglePlaying,
    changeTrack,
    toggleLike,
    fetchTrack,
  }),
  lifecycle({
    componentDidMount() {
      const { trackId, track } = this.props;
      if (trackId && !track) {
        this.props.fetchTrack(trackId);
      }
    },
  }),
);

export default enhance(Player);
