import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import withPlayerContext from 'containers/hocs/withPlayerContext';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background: #1DB954;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #FFF;
  cursor: pointer;
  font-weight: 200;
  transition: transform 50ms ease-out;

  &:hover {
    transform: scale(1.05);
    background: #1CD85E;
  }
`;

const PlayButton = ({
  isPlaying,
  activeTrackId,
  activeTimelineId,
  toggleTrack
}) => (
  <Button onClick={toggleTrack}>
    {isPlaying ? 'Pause' : 'Play'}
  </Button>
);
PlayButton.propTypes = {
  toggleTrack: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  activeTrackId: PropTypes.number,
  activeTimelineId: PropTypes.number,
  activetimeline: PropTypes.string,
};

export default withPlayerContext(PlayButton);

