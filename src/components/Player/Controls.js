import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import PlayIcon from 'components/icons/Play';
import PauseIcon from 'components/icons/Pause';
import SeekBar from './SeekBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  height: 100%;
  justify-content: stretch;
`;

const PlayerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayButton = styled.button`
  height: 40px;
  width: 40px;
  margin: 0 10px;
  cursor: pointer;
  position: relative
  margin: 0 5px;
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.secondaryText};
  justify-content: center;
  transition: transform .1s ease-out, color .1s ease-out;

  svg {
    fill: ${props => props.theme.colors.secondaryText};
    height: 50%;
    width: 50%;
    position: relative;
  }

  &:hover {
    transform: scale(1.05);

    svg {
      fill: ${props => props.theme.colors.primaryText}
    }
  }
`;

class Controls extends Component {
  static propTypes = {
    playedSeconds: PropTypes.number,
    totalSeconds: PropTypes.number,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onTogglePlay: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onShuffle: PropTypes.func.isRequired, //TODO: implement eventually
  };

  static defaultProps = {
    playedSeconds: 0,
    totalSeconds: 0,
    onShuffle: 0,
  };

  render() {
    const {
      isPlaying,
      onPrev,
      onTogglePlay,
      onNext,
      playedSeconds,
      totalSeconds,
    } = this.props;

    return (
      <Wrapper>
        <PlayerButtons>
          <button onClick={onPrev} />
          <PlayButton onClick={onTogglePlay}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </PlayButton>
          <button onClick={onNext} />
        </PlayerButtons>
        <SeekBar
          playedSeconds={playedSeconds}
          totalSeconds={totalSeconds}
        />
      </Wrapper>
    );
  }
}

export default Controls;
