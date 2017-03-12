import React, { PropTypes } from 'react';
import styled from 'styled-components';

const PlayerIcon = styled.div`
`


const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
`


const PlayOverlay = ({ isPlaying }) => (
  <Wrapper>
    <PlayerIcon>
      {isPlaying ? <Play /> : <Pause />}
    </PlayerIcon>
  </Wrapper>
);
PlayOverlay.propTypes = {
  isPlaying: PropTypes.bool.isRequired
}

export default PlayOverlay;
