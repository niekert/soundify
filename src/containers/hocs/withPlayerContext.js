import React from 'react';
import { connect } from 'react-redux';
import { queueTrack } from 'actions/queueActions';
import { toggleLike } from 'actions/trackActions';
import { toggleTrack } from 'actions/playerActions';

const withPlayerContext = (ComposedComponent) => {
  const EnhancePlayercontext = props => (
    <ComposedComponent {...props} />
  );

  const mapStateToProps = (state) => {
    const { isPlaying, activeTrackId, activeTimelineId } = state.player;

    return {
      isPlaying,
      activeTrackId,
      activeTimeline: state.timeline.active,
      activeTimelineId, // TODO: rename this
    };
  };

  return connect(mapStateToProps, {
    toggleTrack,
    toggleLike,
    queueTrack,
  })(EnhancePlayercontext);
};

export default withPlayerContext;
