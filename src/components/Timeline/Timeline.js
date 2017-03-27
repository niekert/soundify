import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { STATUS_OK, STATUS_INITIAL } from 'constants';
import Loader from 'components/Loader';
import Track from './Track';

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
`;

const NoTracks = styled.h1`

`; // TODO: style

const TrackContainer = styled.ul`
  padding-top: 15px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

class Timeline extends PureComponent {
  static propTypes = {
    tracks: PropTypes.array,
    status: PropTypes.string,
    isPlaying: PropTypes.bool.isRequired,
    activeTrackId: PropTypes.number,
    type: PropTypes.string.isRequired,
    trackClicked: PropTypes.func.isRequired,
  };

  static defaultProps = {
    tracks: [],
    status: STATUS_INITIAL,
    activeTrackId: null,
  }

  _onTrackClicked = (trackId, toggle) => {
    this.props.trackClicked({
      trackId,
      isPlaying: toggle,
      timelineId: this.props.type,
    });
  }

  _renderTrackList() {
    const {
      tracks,
      status,
      activeTrackId,
      isPlaying,
    } = this.props;

    // Placeholder for when there are no tracks
    if (status === STATUS_OK && !tracks.length) {
      return (
        <NoTracks>
          There are no tracks here (yet). add one.
        </NoTracks>
      );
    }

    return (
      <TrackContainer>
        {tracks.map(track => (
          <Track
            key={track.id}
            isPlaying={track.id === activeTrackId && isPlaying}
            track={track}
            onClick={this._onTrackClicked}
          />
        ))}
      </TrackContainer>
    );
  }

  render() {
    const { status } = this.props;

    const content =
      status === STATUS_OK ?
        this._renderTrackList() :
        <Loader />;

    return (
      <Wrapper>
        {content}
      </Wrapper>
    );
  }
}

export default Timeline;
