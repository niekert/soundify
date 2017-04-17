import React from 'react';
import { toggleTrack } from 'actions/playerActions';
import { queueTrack } from 'actions/queueActions';
import { toggleLike } from 'actions/trackActions';
import { activeTimelineTracks } from 'selectors/timeline';
import TrackList from 'components/TrackList';
import { connect } from 'react-redux';

const TracklistContainer = props => <TrackList {...props} />;

function mapStateToProps(state) {
  return {
    activeTrackId: state.player.activeTrackId,
    isPlaying: state.player.isPlaying,
    tracks: activeTimelineTracks(state),
    timelineId: state.timeline.active,
  };
}

export default connect(mapStateToProps, {
  toggleTrack,
  queueTrack,
  toggleLike,
})(TracklistContainer);
