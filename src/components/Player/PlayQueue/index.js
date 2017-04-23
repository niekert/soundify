import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { H3 } from 'components/styles/Headings';
import { prop } from 'styled-tools';
import Track from './Track';
import QueueEmpty from './QueueEmpty';

const backstyles = css`
  background: ${prop('theme.colors.primaryBackground')};
  border: 1px solid ${prop('theme.colors.outline')};
  border-radius: 2px;
  box-shadow: 0px 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  text-algin: center;
  user-select: none;
  padding: 15px 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  ${backstyles}
  border-radius: 2px;
  z-index: 100;
  bottom: 30px;
  left: -140px;
  width: 300px;
  height: auto;

  &:before {
    content: '';
    ${backstyles}
    position: absolute;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    bottom: -5px;
    left: 155px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: ${prop('theme.colors.primaryBackground')};
  }
`;

const TrackList = styled.ul`
  max-height: 300px;
  overflow: auto;
  padding: 0 15px;
`;

const Title = styled(H3)`
  padding: 0 15px;
`;

const PlayQueue = ({
  tracks,
  timeline, // eslint-disable-line
}) => (
  <Wrapper>
    {!tracks.length ?
      <QueueEmpty /> :
    [
      <Title key="title">Play queue</Title>,
      <TrackList key="tracklist">
        {tracks.map((track, index) => (
          <Track
            key={`${track.id}-${index}`}
            artworkUrl={track.artwork_url}
            title={track.title}
            artist={track.user.username}
          />
        ))}
      </TrackList>,
    ]
    }
  </Wrapper>
);
PlayQueue.propTypes = {
  tracks: PropTypes.array.isRequired,
  timeline: PropTypes.object,
};

export default PlayQueue;
