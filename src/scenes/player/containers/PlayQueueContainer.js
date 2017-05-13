import React from 'react';
import { changeQueue, removeFromQueue } from 'data/queue/actions';
import { playQueue } from 'selectors/queue';
import { activeTimeline } from 'selectors/player';
import { connect } from 'react-redux';
import PlayQueue from '../components/PlayQueue';

const PlayQueueContainer = props => <PlayQueue {...props} />;

const mapStateToProps = state => ({
  timeline: activeTimeline(state),
  queue: playQueue(state),
});

export default connect(mapStateToProps, {
  changeQueue,
  removeFromQueue,
})(PlayQueueContainer);
