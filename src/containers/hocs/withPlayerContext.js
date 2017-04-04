import React from 'react';
import { connect } from 'react-redux';
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
      activeContextId: activeTimelineId, // TODO: rename this
    };
  };

  return connect(mapStateToProps, {
    toggleTrack,
  })(EnhancePlayercontext);
};

export default withPlayerContext;
