import React from 'react';
import { connect } from 'react-redux';
import { queueTrack } from 'data/queue/actions';
import { toggleLike } from 'actions/trackActions';
import { toggleTrack } from 'data/player/actions';

const withPlayerContext = ComposedComponent => {
  const EnhancePlayercontext = props => <ComposedComponent {...props} />;

  const mapStateToProps = state => {
    const { isPlaying, activeTrackId, activeFeedId } = state.data.player;

    return {
      isPlaying,
      activeTrackId,
      activeFeedId,
    };
  };

  return connect(mapStateToProps, {
    toggleTrack,
    toggleLike,
    queueTrack,
  })(EnhancePlayercontext);
};

export default withPlayerContext;
