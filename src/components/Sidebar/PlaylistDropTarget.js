import React from 'react';
import { number, func, bool, element } from 'prop-types';
import { DropTarget } from 'react-dnd';
import { DRAGGABLE_TYPES } from 'app-constants';

const PlaylistDropTarget = ({
  playlistId,
  addTrackToPlaylist,
  connectDropTarget,
  canDrop,
  isOver,
  children,
}) =>
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
  canDrop(props) {
    return true;
  },

  drop(props, monitor) {
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
