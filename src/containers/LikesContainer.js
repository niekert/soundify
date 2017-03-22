import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchLikes, TIMELINE_TYPE_LIKES } from 'actions/timelineActions';
import { tracksByIds } from 'selectors/tracks';
import { toggleTrack } from 'actions/playerActions';
import withUser from 'containers/hocs/withUser';
import Timeline from '../components/Timeline/Timeline';

class LikesContainer extends PureComponent {
  static propTypes = {
    tracks: PropTypes.arrayOf(PropTypes.object),
    isPlaying: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    fetchLikes: PropTypes.func.isRequired,
    toggleTrack: PropTypes.func.isRequired,
    type: PropTypes.string,
  };

  static defaultProps = {
    tracks: [],
  };

  componentDidMount() {
    this.props.fetchLikes();
  }

  render() {
    console.log('props is', this.props);
    const { tracks, status, activeTrackId, isPlaying } = this.props;

    return (
      <Timeline
        trackClicked={this.props.toggleTrack}
        tracks={tracks}
        status={status}
        isPlaying={isPlaying}
        activeTrackId={activeTrackId}
        type={TIMELINE_TYPE_LIKES}
      />
    );
  }
}

function mapStateToProps(state) {
  // TODO: Selector
  const timeline = state.timelines[TIMELINE_TYPE_LIKES];
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
  fetchLikes,
})(LikesContainer));
