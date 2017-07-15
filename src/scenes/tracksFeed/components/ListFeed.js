import React, { PureComponent } from 'react';
import { func, arrayOf, string, bool, number, object } from 'prop-types';
import styled from 'styled-components';
import TrackRow, { HeaderRow } from './TrackRow';

const Wrapper = styled.section`width: 100%;`;

class ListFeed extends PureComponent {
  static propTypes = {
    playTrack: func.isRequired,
    pauseTrack: func.isRequired, // eslint-disable-line
    queueTrack: func.isRequired, // eslint-disable-line
    toggleLike: func.isRequired, // eslint-disable-line
    tracks: arrayOf(object),
    feedId: string,
    isPlaying: bool,
    activeTrackId: number,
  };

  state = {
    selectedTrackId: null,
  };

  _handleTrackSelected = trackId => {
    this.setState({ selectedTrackId: trackId });
  };

  _handleMouseLeave = () => this.setState({ hoveredTrackId: null });

  _handleDoubleClick = (trackId, index) => {
    const { feedId, playTrack } = this.props;
    playTrack({
      feedId,
      indexInFeed: index,
      trackId,
    });
  };

  render() {
    const { tracks, activeTrackId, isPlaying } = this.props;
    const { selectedTrackId } = this.state;

    return (
      <Wrapper onMouseLeave={this._handleMouseLeave}>
        <HeaderRow />
        {tracks.map((track, index) =>
          <TrackRow
            key={`trackrow-${track.id}-${index}`} // eslint-disable-line
            track={track}
            index={index}
            setSelectedTrackId={this._handleTrackSelected}
            handleDoubleClick={this._handleDoubleClick}
            isActive={track.id === selectedTrackId}
            isPlaying={isPlaying && activeTrackId === track.id}
          />,
        )}
      </Wrapper>
    );
  }
}

export default ListFeed;
