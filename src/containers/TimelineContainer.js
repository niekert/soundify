import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { INITIAL, OK } from 'constants';
import { fetchTimeline } from 'actions/timelineActions';
import { timelineById } from 'selectors/timeline';
import withUser from 'containers/hocs/withUser';
import Timeline from '../components/Timeline/Timeline';

class TimelineContainer extends PureComponent {
  static propTypes = {
    timeline: PropTypes.object,
    match: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
    fetchTimeline: PropTypes.func.isRequired,
  };

  static defaultProps = {
    timeline: null,
    trackIds: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { playlistType, id } = match.params;
    this.props.fetchTimeline(playlistType, { id });
  }

  componentWillReceiveProps(nextProps) {
    const { playlistType, id: nextId } = nextProps.match.params;
    const { id: currentId, playlistType: currentType } = this.props.match.params;
    if (
      (playlistType !== currentType ||
      nextId !== currentId) &&
      nextProps.status === INITIAL
    ) {
      this.props.fetchTimeline(playlistType, { id: nextId });
    }
  }

  render() {
    const {
      timeline,
      status,
      match,
     } = this.props;

    return (
      <Timeline
        timeline={timeline}
        status={status}
        type={match.params.id || match.params.playlistType}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { match } = ownProps;
  const { id, playlistType } = match.params;

  const timelineId = id || playlistType; // for /likes, need to think of better way
  const timeline = timelineById(state.entities.timelines, timelineId);

  return {
    timeline,
    status: timeline ? OK : INITIAL,
  };
}

export default withUser(connect(mapStateToProps, {
  fetchTimeline,
})(TimelineContainer));
