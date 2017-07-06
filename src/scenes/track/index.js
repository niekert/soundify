import React from 'react';
import { fetchTrack } from 'data/tracks/actions';
import { playTrack, togglePlaying } from 'data/player/actions';
import { string, object, func } from 'prop-types';
import { trackById, trackStatus } from 'selectors/tracks';
import { connect } from 'react-redux';
import { INITIAL } from 'app-constants';
import TrackPage from './components/TrackPage';

class TrackContainer extends React.Component {
  static propTypes = {
    status: string,
    match: object.isRequired,
    fetchTrack: func.isRequired,
  };

  componentDidMount() {
    const { match, status } = this.props;
    if (status === INITIAL) {
      this.props.fetchTrack(match.params.trackId);
    }
  }

  render() {
    return <TrackPage {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const trackId = parseInt(ownProps.match.params.trackId, 10);
  const { player } = state.data;

  return {
    track: trackById(state.entities, trackId),
    isPlaying: player.isPlaying && player.activeTrackId === trackId,
    status: trackStatus(state, trackId),
  };
};

const actions = {
  fetchTrack,
  playTrack,
  pauseTrack: () => togglePlaying(false),
};

export default connect(mapStateToProps, actions)(TrackContainer);
