import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { STATUS_OK, STATUS_INITIAL } from 'constants';
import Track from './Track';

const Wrapper = styled.div`
  flex: 1;
`;

const Loading = styled.div`

`; // TODO:

const TrackContainer = styled.ul`
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Timeline extends PureComponent {
  static propTypes = {
    tracks: PropTypes.array,
    status: PropTypes.string,
    isPlaying: PropTypes.bool.isRequired,
    activeTrackId: PropTypes.number,
    trackClicked: PropTypes.func.isRequired,
  };

  static defaultProps = {
    tracks: [],
    status: STATUS_INITIAL,
    activeTrackId: null,
  }

  _renderTrackList() {
    const { tracks, trackClicked, activeTrackId, isPlaying } = this.props;

    return (
      <TrackContainer>
        {tracks.map(track => (
          <Track
            key={track.id}
            isPlaying={track.id === activeTrackId && isPlaying}
            track={track}
            onClick={trackClicked}
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
        <Loading />;

    return (
      <Wrapper>
        {content}
      </Wrapper>
    );
  }
}

export default Timeline;
