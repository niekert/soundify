import React from 'react';
import PropTypes from 'prop-types';
import VolumeIcon from 'components/icons/VolumeIcon';
import PlayQueueIcon from 'components/icons/PlayQueue';
import ChromecastIcon from 'components/icons/Chromecast';
import PopOver from 'components/helpers/Popover';
import IconButtonComponent from 'components/buttons/IconButton';
import PlayQueueContainer from 'containers/PlayQueueContainer';
import Slider from 'components/Slider';
import { onlyUpdateForKeys, compose, withHandlers } from 'recompose';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled(IconButtonComponent)`
  display: flex;
  align-items: center;
  margin-left: 1.5em;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const VolumeBar = styled.div`
  margin-left: 10px;
  width: 75px;
`;

const enhance = compose(
  onlyUpdateForKeys(['volume']),
  withHandlers({
    onChange: ({ setVolume }) => e => setVolume(Number(e.target.value)),
    mute: ({ setVolume }) => () => setVolume(0),
  }),
);

function cast() {
  alert('not implemented yet');
}

const PlayQueueButton = () => (
  <IconButton>
    <PlayQueueIcon />
  </IconButton>
);

const SideControls = enhance(
  ({ volume, onChange, mute }) => (
    <Wrapper>
      <PopOver
        triggerButton={PlayQueueButton}
        width="600"
        align="center"
      >
        <PlayQueueContainer />
      </PopOver>
      <IconButton onClick={cast}>
        <ChromecastIcon onClick={cast} />
      </IconButton>
      <VolumeControl>
        <IconButton onClick={mute} >
          <VolumeIcon />
        </IconButton>
        <VolumeBar>
          <Slider percentage={volume} onChange={onChange} />
        </VolumeBar>
      </VolumeControl>
    </Wrapper>
  ),
);
SideControls.propTypes = {
  volume: PropTypes.number,
  setVolume: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['volume'])(SideControls);
