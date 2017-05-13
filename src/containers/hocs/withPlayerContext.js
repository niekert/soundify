import React from 'react';
import { connect } from 'react-redux';
import { queueTrack } from 'data/queue/actions';
import { toggleLike } from 'actions/trackActions';
import { toggleTrack } from 'data/player/actions';

const withPlayerContext = ComposedComponent => {
  const EnhancePlayercontext = props => <ComposedComponent {...props} />;

  const mapStateToProps = state => {
    const { isPlaying, activeTrackId, activeTimelineId } = state.data.player;

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
