import { compose, lifecycle } from 'recompose';
import { togglePlaying, nextTrack, prevTrack } from 'data/player/actions';
import { toggleLike, fetchTrack } from 'data/tracks/actions';
import { trackById } from 'selectors/tracks';
import { connect } from 'react-redux';
import Player from './components';

function mapStateToProps(state) {
  const { isPlaying, activeTrackId, active } = state.data.player;
  const { volumePercentage } = state.data.settings;

  return {
    isPlaying,
    isActive: active,
    trackId: activeTrackId,
    track: trackById(state.entities, activeTrackId),
    volume: volumePercentage,
  };
}

const enhance = compose(
  connect(mapStateToProps, {
    togglePlaying,
    nextTrack,
    prevTrack,
    toggleLike,
    fetchTrack,
  }),
  lifecycle({
    componentDidMount() {
      const { trackId, track } = this.props;
      if (trackId && !track) {
        this.props.fetchTrack(trackId);
      }
    },
  }),
);

export default enhance(Player);
