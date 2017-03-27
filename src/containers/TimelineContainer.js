import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { STATUS_INITIAL, STATUS_OK } from 'constants';
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
  };

  static defaultProps = {
    activeTrackId: null,
    tracks: [],
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
      nextProps.status === STATUS_INITIAL
    ) {
      this.props.fetchTimeline(playlistType, { id: nextId });
    }
  }

  render() {
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
  const tracks = timeline ?
    tracksByIds(state.entities, timeline.tracks) :
    [];

  return {
    timeline,
    tracks,
    isPlaying: state.player.isPlaying,
    activeTrackId: state.player.activeTrackId,
    status: timeline ? STATUS_OK : STATUS_INITIAL,
  };
}

export default withUser(connect(mapStateToProps, {
  toggleTrack,
  fetchTimeline,
})(TimelineContainer));
