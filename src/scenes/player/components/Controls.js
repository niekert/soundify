import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Link } from 'react-router-dom';
import SeekBar from './SeekBar';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 1000px;
  min-width: 0;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
`;

const CurrentTrackContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;tr
  width: 100%;
  overflow: hidden;
  padding: 0 30px 10px;
  font-weight: 300;
  align-items: flex-end;
`;

const CurrentTrackLink = styled(Link)`
  color: ${prop('theme.colors.primaryText')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 300;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    opacity: .7;
  }
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
      <div>
        <Wrapper>
          <CurrentTrackContainer>
            {!!track &&
              <CurrentTrackLink to={`/track/${track.id}`}>
                {track.title}
              </CurrentTrackLink>}
          </CurrentTrackContainer>
          <SeekBar
            isPlaying={isPlaying}
            isActive={isActive}
            onSeek={onSeek}
            playedSeconds={playedSeconds}
            totalSeconds={totalSeconds}
          />
        </Wrapper>
      </div>
    );
  }
}

export default Controls;
