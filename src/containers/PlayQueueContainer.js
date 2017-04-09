import React from 'react';
import { queuedTracks } from 'selectors/queue';
import { activeTimeline } from 'selectors/player';
import { connect } from 'react-redux';
import PlayQueue from 'components/Player/PlayQueue';

const PlayQueueContainer = props => <PlayQueue {...props} />;

const mapStateToProps = state => ({
  timeline: activeTimeline(state),
  tracks: queuedTracks(state),
});

export default connect(mapStateToProps)(PlayQueueContainer);
