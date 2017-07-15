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
  color: #fff;
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
      togglePlaying,
      playTrack,
      isPlaying,
      timelineId,
      activeFeedId,
      trackId,
    }) => e => {
      e.preventDefault();
      if (activeFeedId === timelineId) {
        togglePlaying(!isPlaying);
      } else {
        playTrack({
          trackId,
          feedId: timelineId,
          indexInFeed: 0,
        });
      }
    },
  }),
  pure,
  setDisplayName('PlayButton'),
);

const PlayButton = ({ isPlaying, timelineId, activeFeedId, onClick }) =>
  <Button onClick={onClick}>
    {isPlaying && timelineId === activeFeedId ? 'Pause' : 'Play'}
  </Button>;
PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  timelineId: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
  activeFeedId: PropTypes.string,
};

export default enhance(PlayButton);
