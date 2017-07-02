import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from 'components/icons/Play';
import Pause from 'components/icons/Pause';
import styled, { css } from 'styled-components';
import QueueButton from 'components/buttons/QueueButton';
import LikeButton from 'components/buttons/LikeButton';
import { prop } from 'styled-tools';

const icon = css`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${prop('theme.shadows.depth1')};
`;

const PlayerIcon = styled.div`
  ${icon} height: 25%;
  width: 25%;
  background: ${props => props.theme.colors.cta};
  color: ${prop('theme.colors.reverse.background')};

  svg {
    width: 75%;
    fill: white;
  }
`;

const SecondaryIcon = styled.div`
  ${icon} cursor: pointer;
  height: 20%;
  width: 20%;
  padding: 0;
  border: 1px solid ${prop('theme.colors.primaryText')};
  background: rgba(0, 0, 0, .3);
  transition: transform 75ms ease-out;
  display: flex;
  align-items: stretch;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    width: 50%;
    height: 50%;
    position: relative;
    color: ${prop('theme.colors.primaryText')};
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, .3);
`;

const PlayOverlay = ({
  isPlaying,
  trackId,
  className,
  onToggleLike,
  likeActive,
  onQueue,
}) =>
  <Wrapper className={className}>
    <SecondaryIcon>
      <LikeButton
        onToggle={onToggleLike}
        trackId={trackId}
        active={likeActive}
      />
    </SecondaryIcon>
    <PlayerIcon>
      {isPlaying ? <Pause /> : <PlayIcon />}
    </PlayerIcon>
    <SecondaryIcon>
      <QueueButton onClick={onQueue} trackId={trackId} />
    </SecondaryIcon>
  </Wrapper>;
PlayOverlay.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  trackId: PropTypes.number.isRequired,
  onToggleLike: PropTypes.func.isRequired,
  onQueue: PropTypes.func.isRequired,
  likeActive: PropTypes.bool,
  className: PropTypes.string, // TODO: fix this ugly hack
};
PlayOverlay.defaultProps = {
  className: '',
};

export default PlayOverlay;
