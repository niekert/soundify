import React from 'react';
import { toggleTrack } from 'actions/playerActions';
import { queueTrack } from 'actions/queueActions';
import { toggleLike } from 'actions/trackActions';
import { tracksByIds } from 'selectors/tracks';
import TrackList from 'components/TrackList';
import { connect } from 'react-redux';

const TracklistContainer = props => <TrackList {...props} />;

function mapStateToProps(state, ownProps) {
  return {
    activeTrackId: state.player.activeTrackId,
    isPlaying: state.player.isPlaying,
    tracks: tracksByIds(state.entities, ownProps.trackIds),
  };
}

export default connect(mapStateToProps, {
  toggleTrack,
  queueTrack,
  toggleLike,
})(TracklistContainer);
