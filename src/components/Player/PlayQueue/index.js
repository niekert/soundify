import React from 'react';
import { array, object, func } from 'prop-types';
import styled, { css } from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; // ES6
import { H3 } from 'components/styles/Headings';
import { withHandlers, compose } from 'recompose';
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

const TrackList = styled(CSSTransitionGroup)`
  max-height: 300px;
  overflow: auto;
  padding: 0 10px;

  & .queue-leave {
    position: relative;
    transform: scale(0.98);
    transition: transform 200ms ease-out, opacity 200ms ease-out;
  }

  & .queue-leave-active {
    transform: translateX(110%) scale(0.98);
    opacity: 0;
  }
`;

const Title = styled(H3)`
  padding: 0 10px;
`;

const PlayQueue = ({
  queue,
  changeQueue,
  findIndex,
  removeFromQueue,
  timeline, // eslint-disable-line
}) => (
  <Wrapper>
    {!queue.length ?
      <QueueEmpty /> :
    [
      <Title key="title">Play queue</Title>,
      <TrackList
        key="tracklist"
        component="ul"
        transitionName="queue"
        transitionEnter={false}
        transitionLeave
        transitionLeaveTimeout={200}
      >
        {queue.map(queueItem => (
          <Track
            key={`${queueItem.id}`}
            id={queueItem.id}
            findIndex={findIndex}
            changeQueue={changeQueue}
            removeFromQueue={removeFromQueue}
            artworkUrl={queueItem.track.artwork_url}
            title={queueItem.track.title}
            artist={queueItem.track.user.username}
          />
      ))}
      </TrackList>,
    ]
    }
  </Wrapper>
);
PlayQueue.propTypes = {
  queue: array.isRequired,
  findIndex: func.isRequired,
  changeQueue: func.isRequired,
  removeFromQueue: func.isRequired,
  timeline: object,
};

const enhance = compose(
  withHandlers({
    findIndex: ({ queue }) => queueItemId => (
      queue.findIndex(item => item.id === queueItemId)
    ),
  }),
);

export default enhance(PlayQueue);
