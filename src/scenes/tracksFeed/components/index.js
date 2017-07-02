import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { status as statusPropType } from 'PropTypes';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import Loader from 'components/Loader';
import withPlayerContext from 'containers/hocs/withPlayerContext';
import { isDone } from 'utils/status';
import Track from './Track';

const Wrapper = styled.ul`
  position: relative;
  padding-top: 15px;
  margin-left: 10px;
  display: grid;
  grid-template-rows: repeat(auto-fit, 250px);
  grid-template-columns: repeat(auto-fit, 200px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  width: 100%;
  height: auto;
  user-select: none;
`;

const FetchNextTrigger = styled.div`
  position: absolute;
  bottom: 10px;
  display: ${ifProp('active', 'block', 'none')};
`;

const Loading = styled(Loader)`
  position: absolute;
  bottom: -150px;
  display: block;
  width: 100%;
`;

const NoTracks = styled.h2``;

class TrackList extends PureComponent {
  static propTypes = {
    toggleTrack: PropTypes.func.isRequired,
    queueTrack: PropTypes.func.isRequired,
    toggleLike: PropTypes.func.isRequired,
    fetchNext: PropTypes.func.isRequired,
    hasNext: PropTypes.bool,
    status: statusPropType,
    next: PropTypes.string,
    tracks: PropTypes.arrayOf(PropTypes.object),
    feedId: PropTypes.string,
    isPlaying: PropTypes.bool,
    activeTrackId: PropTypes.number,
  };

  static defaultProps = {
    tracks: [],
    activeTrackId: null,
    hasNext: false,
    isPlaying: false,
    feedId: '',
  };

  componentDidMount() {
    this.intersectionObserver = new window.IntersectionObserver(entries => {
      const [sentinel] = entries; // Always on first index
      if (sentinel.intersectionRatio > 0 && this.props.hasNext) {
        this.props.fetchNext(this.props.feedId, this.props.next);
      }
    });

    this.intersectionObserver.observe(this._nextObserver);
  }

  _nextObserverRef = c => {
    this._nextObserver = c;
  };

  _trackClicked = (trackId, toggle) => {
    this.props.toggleTrack({
      trackId,
      isPlaying: toggle,
      feedId: this.props.feedId,
    });
  };

  render() {
    const {
      tracks,
      activeTrackId,
      isPlaying,
      hasNext,
      status,
      queueTrack,
      toggleLike,
    } = this.props;

    return (
      <Wrapper>
        {tracks.map((track, index) =>
          <Track
            key={`${track.id}-${index}`} // eslint-disable-line
            isPlaying={track.id === activeTrackId && isPlaying}
            track={track}
            toggleLike={toggleLike}
            onClick={this._trackClicked}
            onQueue={queueTrack}
          />,
        )}
        <FetchNextTrigger innerRef={this._nextObserverRef} active={hasNext} />
        {isDone(status) &&
          !tracks.length &&
          <NoTracks>There's nothing here brah</NoTracks>}
        {!isDone(status) && <Loading />}
      </Wrapper>
    );
  }
}

export default withPlayerContext(TrackList);
