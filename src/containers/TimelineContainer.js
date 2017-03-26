import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchTimeline, TIMELINE_TYPE_LIKES } from 'actions/timelineActions';
import { tracksByIds } from 'selectors/tracks';
import { timelineById } from 'selectors/timeline';
import { toggleTrack } from 'actions/playerActions';
import withUser from 'containers/hocs/withUser';
import Timeline from '../components/Timeline/Timeline';

class TimelineContainer extends PureComponent {
  static propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.object.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    activeTrackId: PropTypes.number,
    status: PropTypes.string.isRequired,
    fetchTimeline: PropTypes.func.isRequired,
    toggleTrack: PropTypes.func.isRequired,
    options: PropTypes.object,
  };

  static defaultProps = {
    activeTrackId: null,
    tracks: [],
    options: {},
  };

  componentDidMount() {
    const { match, options } = this.props;
    this.props.fetchTimeline(match.params.id, options);
  }

  render() {
    console.log('match is', this.props.match);
    const {
      tracks,
      status,
      match,
      activeTrackId,
      isPlaying,
     } = this.props;

    return (
      <Timeline
        trackClicked={this.props.toggleTrack}
        tracks={tracks}
        status={status}
        isPlaying={isPlaying}
        activeTrackId={activeTrackId}
        type={match.params.id}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { match } = ownProps;

  const timeline = timelineById(state.timelines, match.params.id);
  const tracks = timeline ?
    tracksByIds(state.entities, timeline.trackIds) :
    [];

  return {
    timeline,
    tracks,
    isPlaying: state.player.isPlaying,
    activeTrackId: state.player.activeTrackId,
    status: timeline && timeline.status,
  };
}

export default withUser(connect(mapStateToProps, {
  toggleTrack,
  fetchTimeline,
})(TimelineContainer));
