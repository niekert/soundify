import React from 'react';
import PropTypes from 'prop-types';
import VolumeMax from 'components/icons/VolumeMax';
import VolumeMute from 'components/icons/VolumeMute';
import PlayQueueIcon from 'components/icons/TracksQueue';
import ChromecastIcon from 'components/icons/Cast';
import IconButtonComponent from 'components/buttons/IconButton';
import PopOver from 'components/helpers/Popover';
import Slider from 'components/Slider';
import { onlyUpdateForKeys, compose, withHandlers, withState } from 'recompose';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import PlayQueueContainer from '../containers/PlayQueueContainer';

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
    width: ${ifProp('large', '18px', '16px')};
    height: ${ifProp('large', '18px', '16px')};
  }
`;

const VolumeBar = styled.div`
  margin-left: 10px;
  width: 75px;
`;

const enhance = compose(
  onlyUpdateForKeys(['volume']),
  withState('beforeMuteVolume', 'setOnMuteVolume', 100),
  withHandlers({
    onChange: ({ setVolume }) => e => setVolume(Number(e.target.value)),
    mute: ({ setVolume, volume, setOnMuteVolume, beforeMuteVolume }) => () => {
      if (volume === 0) {
        setVolume(beforeMuteVolume);
        return;
      }

      setOnMuteVolume(volume);
      setVolume(0);
    },
  }),
);

function cast() {
  alert('not implemented yet');
}

const VolumeIcon = ({ volume, onClick }) =>
  <IconButton onClick={onClick}>
    {volume === 0 ? <VolumeMute /> : <VolumeMax />}
  </IconButton>;
VolumeIcon.propTypes = {
  volume: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

const PlayQueueButton = () =>
  <IconButton large>
    <PlayQueueIcon />
  </IconButton>;

const SideControls = enhance(({ volume, onChange, mute }) =>
  <Wrapper>
    <PopOver triggerButton={PlayQueueButton} width="600" align="center">
      <PlayQueueContainer />
    </PopOver>
    <IconButton onClick={cast}>
      <ChromecastIcon />
    </IconButton>
    <VolumeControl>
      <VolumeIcon onClick={mute} volume={volume} />
      <VolumeBar>
        <Slider percentage={volume} onChange={onChange} />
      </VolumeBar>
    </VolumeControl>
  </Wrapper>,
);
SideControls.propTypes = {
  volume: PropTypes.number,
  setVolume: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['volume'])(SideControls);
