import { connect } from 'react-redux';
import { queueTrack } from 'data/queue/actions';
import { toggleLike } from 'actions/trackActions';
import { playTrack, togglePlaying } from 'data/player/actions';
import { playerContext } from 'selectors/player';
import { fetchNext } from './actions';
import { makeFeedSelector } from './selectors';
import TrackFeed from './components';

const makeMapStateToProps = () => {
  const getFeed = makeFeedSelector();

  return function mapStateToProps(state, { feedId }) {
    return {
      feedId,
      ...getFeed(state, feedId),
      ...playerContext(state),
    };
  };
};

const actions = {
  fetchNext,
  playTrack,
  pauseTrack: () => togglePlaying(false),
  queueTrack,
  toggleLike,
};

export default connect(makeMapStateToProps, actions)(TrackFeed);
