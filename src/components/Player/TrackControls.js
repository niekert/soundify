import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from 'components/icons/Play';
import NextTrackIcon from 'components/icons/NextTrack';
import PreviousTrackIcon from 'components/icons/PreviousTrack';
import LikeButton from 'components/buttons/LikeButton';
import PauseIcon from 'components/icons/Pause';
import styled, { css } from 'styled-components';

const PlayerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 180px;
  margin: 0 20px;
  align-items: center;
`;

const IconCss = css`
  svg {
    color: ${props => props.theme.colors.primaryText};
    height: 50%;
    width: 50%;
    position: relative;
  }

  &:hover {
    transform: scale(1.05);

    svg {
      color: ${props => props.theme.colors.primaryText}
    }
  }
`;

const PlayButton = styled.button`
  padding: 0;
  height: 40px;
  top: -1px;
  width: 40px;
  cursor: pointer;
  position: relative;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .1s ease-out, color .1s ease-out;

  ${IconCss}
`;

const ChangeTrackButton = styled.button`
  padding: 0;
  color: ${props => props.theme.colors.secondaryText};
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: none;

  ${IconCss}
`;

const LikeButtonWrapper = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrackControls = ({
  track,
  toggleLike,
  onPrev,
  onTogglePlay,
  onNext,
  isPlaying,
}) => (
  <PlayerButtons>
    <ChangeTrackButton onClick={onPrev}>
      <PreviousTrackIcon />
    </ChangeTrackButton>
    <PlayButton onClick={onTogglePlay}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </PlayButton>
    <ChangeTrackButton onClick={onNext}>
      <NextTrackIcon />
    </ChangeTrackButton>
    <LikeButtonWrapper>
      <LikeButton
        onToggle={toggleLike}
        active={track.user_favorite}
        trackId={track.id}
      />
    </LikeButtonWrapper>
  </PlayerButtons>
);
TrackControls.propTypes = {
  track: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  isPlaying: PropTypes.func.isRequired,
};

export default TrackControls;
