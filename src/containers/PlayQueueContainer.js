import React from 'react';
import { changeQueue } from 'actions/queueActions';
import { playQueue } from 'selectors/queue';
import { activeTimeline } from 'selectors/player';
import { connect } from 'react-redux';
import PlayQueue from 'components/Player/PlayQueue';

const PlayQueueContainer = props => <PlayQueue {...props} />;

const mapStateToProps = state => ({
  timeline: activeTimeline(state),
  queue: playQueue(state),
});

export default connect(mapStateToProps, {
  changeQueue,
})(PlayQueueContainer);
