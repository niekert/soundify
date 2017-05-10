import React from 'react';
import PropTypes from 'prop-types';
import { pure, withHandlers, compose, setDisplayName } from 'recompose';
import withPlayerContext from 'containers/hocs/withPlayerContext';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background: ${prop('theme.colors.cta')};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #FFF;
  cursor: pointer;
  font-weight: 200;
  transition: transform 50ms ease-out;

  &:hover {
    transform: scale(1.05);
    background: ${prop('theme.colors.cta')};
  }
`;

const enhance = compose(
  withPlayerContext,
  withHandlers({
    onClick: ({
      toggleTrack,
      isPlaying,
      timelineId,
      activeTrackId,
      activeTimelineId,
      trackId,
    }) => (e) => {
      e.preventDefault();


      const toggle = !(timelineId === activeTimelineId && isPlaying);

      toggleTrack({
        trackId: toggle ? trackId : activeTrackId,
        timelineId,
        isPlaying: toggle,
      });
    },
  }),
  pure,
  setDisplayName('PlayButton'),
);

const PlayButton = ({
  isPlaying,
  timelineId,
  activeTimelineId,
  onClick,
}) => (
  <Button
    onClick={onClick}
  >
    {isPlaying && timelineId === activeTimelineId ? 'Pause' : 'Play'}
  </Button>
);
PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  timelineId: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
  activeTimelineId: PropTypes.string,
};

export default enhance(PlayButton);

