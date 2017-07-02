import React from 'react';
import { number, func, bool, element } from 'prop-types';
import { DropTarget } from 'react-dnd';
import { DRAGGABLE_TYPES } from 'app-constants';

const PlaylistDropTarget = ({ connectDropTarget, canDrop, isOver, children }) =>
  connectDropTarget(
    <div>
      {React.cloneElement(React.Children.only(children), {
        isActive: canDrop && isOver,
      })}
    </div>,
  );

PlaylistDropTarget.propTypes = {
  playlistId: number.isRequired,
  addTrackToPlaylist: func.isRequired,
  connectDropTarget: func.isRequired,
  children: element.isRequired,
  canDrop: bool,
  isOver: bool,
};

const playlistTarget = {
  canDrop() {
    return true;
  },

  drop(props, monitor) {
    // eslint-disable-next-line
    console.log('dropped a track', props, monitor.getItem());
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
  };
}

export default DropTarget(DRAGGABLE_TYPES.TRACK, playlistTarget, collect)(
  PlaylistDropTarget,
);
