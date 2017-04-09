import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import Track from './Track';

const Wrapper = styled.ul`
  padding-top: 15px;
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const NoTracks = styled.h2`
`;

class TrackList extends PureComponent {
  static propTypes = {
    toggleTrack: PropTypes.func.isRequired,
    queueTrack: PropTypes.func.isRequired,
    toggleLike: PropTypes.func.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.object),
    timelineId: PropTypes.string,
    isPlaying: PropTypes.bool,
    activeTrackId: PropTypes.number,
  };

  static defaultProps = {
    tracks: [],
    activeTrackId: null,
    isPlaying: false,
    timelineId: '',
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
        {!tracks.length &&
          <NoTracks>
            There's nothing here brah
          </NoTracks>
        }
      </Wrapper>
    );
  }
}

export default TrackList;
