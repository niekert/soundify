import React from 'react';
import Timeline from '../components/Timeline';
import { connect } from 'react-redux';

const TimelineContainer = props => <Timeline {...props} />;

function mapStateToProps (state) {
  return state;
}

export default connect(mapStateToProps)(TimelineContainer);
