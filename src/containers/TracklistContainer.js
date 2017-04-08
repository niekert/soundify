import React from 'react';
import { toggleTrack } from 'actions/playerActions';
import { queueTrack } from 'actions/queueActions';
import { toggleLike } from 'actions/trackActions';
import { makeTracksByIds } from 'selectors/tracks';
import TrackList from 'components/TrackList';
import { connect } from 'react-redux';

// const TracklistContainer = props => <TrackList {...props} />;

class TracklistContainer extends React.Component {
  componentDidMount() {
    console.log('hell');
  }

  shouldComponentUpdate(nextProps) {
    console.log('same', nextProps.trackIds === this.props.trackIds);
    return true;
  }

  render () {
    return <TrackList {...this.props} />
  }
}

function mapStateToProps(state, ownProps) {
  const tracks = makeTracksByIds(ownProps.trackIds);

  return {
    activeTrackId: state.player.activeTrackId,
    isPlaying: state.player.isPlaying,
    tracks: tracks(state, ownProps.trackIds),
  };
}

export default connect(mapStateToProps, {
  toggleTrack,
  queueTrack,
  toggleLike,
})(TracklistContainer);
