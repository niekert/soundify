import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import SeekBar from './SeekBar';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const CurrentTrack = styled.label`
  align-self: center;
  color: ${prop('theme.colors.primaryText')};
  display: flex;
  white-space: nowrap;
  padding: 0 30px 10px;
  font-weight: 300;
  font-size: 12px;
  align-items: flex-end;
`;

class Controls extends Component {
  static propTypes = {
    playedSeconds: PropTypes.number,
    totalSeconds: PropTypes.number,
    onSeek: PropTypes.func.isRequired,
    track: PropTypes.object,
    isActive: PropTypes.bool,
    isPlaying: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    playedSeconds: 0,
    totalSeconds: 0,
    onShuffle: 0,
  };

  render() {
    const {
      isPlaying,
      playedSeconds,
      track,
      onSeek,
      totalSeconds,
      isActive,
    } = this.props;

    return (
      <Wrapper>
        <CurrentTrack>
          {!!track && `${track.title}`}
        </CurrentTrack>
        <SeekBar
          isPlaying={isPlaying}
          isActive={isActive}
          onSeek={onSeek}
          playedSeconds={playedSeconds}
          totalSeconds={totalSeconds}
        />
      </Wrapper>
    );
  }
}

export default Controls;
