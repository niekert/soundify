import React, { PropTypes } from 'react';
import Play from 'components/icons/Play';
import Pause from 'components/icons/Pause';
import styled from 'styled-components';

const PlayerIcon = styled.div`
  border-radius: 50%;
  height: 25%;
  width: 25%;
  background: ${props => props.theme.colors.cta};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .3);

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
  justify-content: center;
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
