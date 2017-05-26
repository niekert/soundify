import React from 'react';
import { string, func, bool } from 'prop-types';
import DragHandle from 'components/icons/DragHandle';
import ArtWork from 'components/Track/ArtWork';
import CloseIcon from 'components/icons/CloseIcon';
import { DragSource, DropTarget } from 'react-dnd';
import { compose, withHandlers } from 'recompose';
import { DRAGGABLE_TYPES } from 'app-constants';
import styled from 'styled-components';
import { prop, ifProp } from 'styled-tools';

const Wrapper = styled.li`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: ${prop('theme.colors.primaryText')};
  opacity: ${ifProp('isDragging', 0, 1)};
  position: relative;

  &:hover .closeButton {
    display: block !important;
  }
`;

const TrackArtwork = styled(ArtWork)`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 2px;
`;

const Meta = styled.div`
  flex: 1;
  margin-left: 10px;
  display: flex;
  font-weight: 300;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 14px;
  text-overflow: ellipsis;
  margin-bottom: .5em;
  white-space: nowrap;
`;

const Artist = styled.span`
  font-size: 12px;
  color: ${prop('theme.colors.secondaryText')};
`;

const Handle = styled(DragHandle)`
  cursor: pointer;
  flex-shrink: 0;
  margin-right: 10px;
`;

const CloseButton = styled.button.attrs({
  className: 'closeButton',
})`
  position: absolute;
  right: 0;
  height: 100%;
  background: inherit;
  background: ${prop('theme.colors.primaryBackground')};
  color: ${prop('theme.colors.primaryText')};
  padding: 0;
  cursor: pointer;
  display: none;
`;

const Track = ({
  connectDropTarget,
  connectDragSource,
  isDragging,
  artworkUrl,
  title,
  artist,
  className,
  onClickRemove, // eslint-disable-line
}) =>
  connectDragSource(
    connectDropTarget(
      <div>
        <Wrapper className={className} isDragging={isDragging}>
          <Handle />
          <TrackArtwork artworkUrl={artworkUrl} size="200x200" />
          <Meta>
            <Title>{title}</Title>
            <Artist>{artist}</Artist>
          </Meta>
          <CloseButton onClick={onClickRemove}>
            <CloseIcon />
          </CloseButton>
        </Wrapper>
      </div>,
    ),
  );
Track.propTypes = {
  connectDropTarget: func.isRequired,
  connectDragSource: func.isRequired,
  isDragging: bool,
  artworkUrl: string.isRequired,
  title: string.isRequired,
  artist: string.isRequired,
  onClickRemove: func.isRequired,
  changeQueue: func.isRequired,
};

const trackSource = {
  beginDrag({ findIndex, id }) {
    return {
      id,
      originalIndex: findIndex(id),
    };
  },
};

const trackTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const { id: overId, findIndex } = props;

    if (overId !== draggedId) {
      const overIndex = findIndex(overId);
      props.changeQueue(draggedId, overIndex);
    }
  },
};

const enhance = compose(
  DropTarget(DRAGGABLE_TYPES.TRACK, trackTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  })),
  DragSource(DRAGGABLE_TYPES.TRACK, trackSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })),
  withHandlers({
    onClickRemove: ({ removeFromQueue, id }) => () => removeFromQueue(id),
  }),
);

export default enhance(Track);
