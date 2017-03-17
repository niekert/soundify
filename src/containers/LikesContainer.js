import React, { PureComponent, PropTypes } from 'react';
import Timeline from '../components/Timeline/Timeline';
import { fetchLikes, TIMELINE_TYPE_LIKES } from 'actions/timelineActions';
import { tracksByIds } from 'selectors/tracks';
import { toggleTrack } from 'actions/playerActions';
import { connect } from 'react-redux';

class LikesContainer extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.object),
    isPlaying: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    authToken: PropTypes.string.isRequired,
    fetchLikes: PropTypes.func.isRequired,
    toggleTrack: PropTypes.func.isRequired,
    type: PropTypes.string,
  };

  componentDidMount() {
    this.props.fetchLikes(this.props.authToken);
  }

  render() {
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

function mapStateToProps (state, ownProps) {
  // TODO: Selector
  const timeline = state.timelines[TIMELINE_TYPE_LIKES];
  const tracks = timeline ?
    tracksByIds(state.tracks, timeline.trackIds) :
    [];

  return {
    timeline,
    tracks,
    isPlaying: state.player.isPlaying,
    activeTrackId: state.player.activeTrackId,
    status: timeline && timeline.status,
    authToken: state.auth.token,
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    toggleTrack: (trackId, isPlaying) => dispatch(toggleTrack(trackId, isPlaying)),
    fetchLikes: (authToken) => dispatch(fetchLikes(authToken))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LikesContainer);
