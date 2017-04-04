import React, { PropTypes } from 'react';
import VolumeIcon from 'components/icons/VolumeIcon';
import PlayQueueIcon from 'components/icons/PlayQueue';
import ChromecastIcon from 'components/icons/Chromecast';
import Slider from 'components/Slider';
import { onlyUpdateForKeys, compose, withHandlers } from 'recompose';
import { Link } from 'react-router-dom';
import { prop } from 'styled-tools';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-basis: 20%;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;

  &:hover svg {
    color: ${prop('theme.colors.primaryText')};
  }

  svg {
    color: ${prop('theme.colors.secondaryText')};
    width: ${prop('theme.fontSize.icon')};
    height: ${prop('theme.fontSize.icon')};
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

function cast () {
  alert('not implemented yet');
}

const SideControls = enhance(
  ({ volume, onChange, mute }) => (
    <Wrapper>
      <Link to="/queue">
        <IconWrapper>
          <PlayQueueIcon />
        </IconWrapper>
      </Link>
      <IconWrapper>
        <ChromecastIcon onClick={cast} />
      </IconWrapper>
      <VolumeControl>
        <IconWrapper><VolumeIcon onClick={mute} /></IconWrapper>
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
