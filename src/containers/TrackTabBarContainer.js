import { connect } from 'react-redux';
import TrackTabBar from 'components/Track/TrackTabBar';

function mapStateToProps(state, { trackId }) {
  const track = state.entities.tracks[trackId];

  return {
    playCount: track.playback_count,
    likeCount: track.favoritings_count,
    commentCount: track.comment_count,
    trackId,
  };
}

const actions = {
  favorite: () => {},
};

export default connect(mapStateToProps, actions)(TrackTabBar);
