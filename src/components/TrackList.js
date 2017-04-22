import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import withPlayerContext from 'containers/hocs/withPlayerContext';
import Track from './Track';

const Wrapper = styled.ul`
  position: relative;
  padding-top: 15px;
  margin-left: 10px;
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const FetchNextTrigger = styled.div`
  position: absolute;
  bottom: 10px;
  display: ${ifProp('active', 'block', 'none')};
`;

const NoTracks = styled.h2`
`;

class TrackList extends PureComponent {
  static propTypes = {
    toggleTrack: PropTypes.func.isRequired,
    queueTrack: PropTypes.func.isRequired,
    toggleLike: PropTypes.func.isRequired,
    fetchNext: PropTypes.func.isRequired,
    hasNext: PropTypes.bool,
    tracks: PropTypes.arrayOf(PropTypes.object),
    timelineId: PropTypes.string,
    isPlaying: PropTypes.bool,
    activeTrackId: PropTypes.number,
  };

  static defaultProps = {
    tracks: [],
    activeTrackId: null,
    hasNext: false,
    isPlaying: false,
    timelineId: '',
  }

  componentDidMount() {
    this.intersectionObserver = new window.IntersectionObserver((entries) => {
      const [sentinel] = entries; // Always on first index
      if (sentinel.intersectionRatio > 0 && this.props.hasNext) {
        this.props.fetchNext();
      }
    });

    this.intersectionObserver.observe(this._nextObserver);
  }

  _nextObserverRef = (c) => {
    this._nextObserver = c;
  }

  _trackClicked = (trackId, toggle) => {
    this.props.toggleTrack({
      trackId,
      isPlaying: toggle,
      timelineId: this.props.timelineId,
    });
  };

  render() {
    const {
      tracks,
      activeTrackId,
      isPlaying,
      hasNext,
      queueTrack,
      toggleLike,
    } = this.props;

    return (
      <Wrapper>
        {tracks.map(track => (
          <Track
            key={track.id}
            isPlaying={track.id === activeTrackId && isPlaying}
            track={track}
            toggleLike={toggleLike}
            onClick={this._trackClicked}
            onQueue={queueTrack}
          />
        ))}
        <FetchNextTrigger
          innerRef={this._nextObserverRef}
          active={hasNext}
        />
        {!tracks.length &&
          <NoTracks>
            There's nothing here brah
          </NoTracks>
        }
      </Wrapper>
    );
  }
}

export default withPlayerContext(TrackList);
