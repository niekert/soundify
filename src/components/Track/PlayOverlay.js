import React from 'react';
import PropTypes from 'prop-types';
import Play from 'components/icons/Play';
import Pause from 'components/icons/Pause';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const icon = css`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${prop('theme.shadows.depth1')};
`;

const PlayerIcon = styled.div`
  ${icon}
  height: 50%;
  width: 50%;
  background: ${props => props.theme.colors.cta};
  color: ${prop('theme.colors.reverse.background')};

  svg {
    width: 35%;
    fill: white;
  }
`;

const PlayIcon = styled(Play)`
  position: relative;
  left: 2px;
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

const PlayOverlay = ({ isPlaying, className }) => (
  <Wrapper className={className}>
    <PlayerIcon>
      {isPlaying ? <Pause /> : <PlayIcon />}
    </PlayerIcon>
  </Wrapper>
);
PlayOverlay.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  className: PropTypes.string, // TODO: fix this ugly hack
};
PlayOverlay.defaultProps = {
  className: '',
};

export default PlayOverlay;
