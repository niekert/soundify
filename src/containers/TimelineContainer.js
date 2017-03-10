import React, { PureComponent, PropTypes } from 'react';
import Timeline from '../components/Timeline/Timeline';
import { fetchLikes } from 'actions/timelineActions';
import { STATUS_PENDING } from 'constants';
import { connect } from 'react-redux';

function getType () {
  return {

  }
}

class TimelineContainer extends PureComponent {
  static propTypes = {
    fetchTimeline: PropTypes.func.isRequired,
    timeline: PropTypes.object,
    type: PropTypes.string,
    status: PropTypes.Number,
  };

  componentDidMount() {
    this.props.fetchLikes();
  }

  render() {
    const { timeline, type, status } = this.props;

    console.log('this', this.props);
    return (
      <Timeline
        type={type}
        timelzine={timeline}
        status={status}
      />
    );
  }
}

function mapStateToProps (state, ownProps) {
  const timeline = state.timelines[ownProps.type];

  return {
    timeline: timeline && timeline.data,
    authToken: state.auth.token,
    status: timeline ? timeline.status : STATUS_PENDING
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    fetchLikes: () => dispatch(fetchLikes(ownProps.type))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);
