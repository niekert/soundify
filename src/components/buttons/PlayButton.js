import React, { PropTypes } from 'react';
import { pure } from 'recompose';
import withPlayerContext from 'containers/hocs/withPlayerContext';
import PlayIcon from 'components/icons/Play';
import PauseIcon from 'components/icons/Pause';
import styled from 'styled-components';

const PlayButton = ({
  isPlaying,
  activeTrackId,
  activeTimelineId,
  toggleTrack
}) => (
  <div>Player button</div>
);
PlayButton.propTypes = {
  toggleTrack: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  activeTrackId: PropTypes.number,
  activeTimelineId: PropTypes.number,
};

export default withPlayerContext(PlayButton);

