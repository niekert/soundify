import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DragSource } from 'react-dnd';
import { DRAGGABLE_TYPES } from 'app-constants';
import { prop, ifProp } from 'styled-tools';
import ArtWork from 'components/Track/ArtWork';
import QueueButton from 'components/buttons/QueueButton';
import LikeButton from 'components/buttons/LikeButton';
import PlayOverlay from './PlayOverlay';

const Wrapper = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  min-height: 100px;
  flex-direction: row;
  opacity: ${ifProp('isDragging', 0.8, 1)};
  margin-top: 50px;
`;

const PlayerArtwork = styled(ArtWork)`
  position: relative;
  background-repeat: no-repeat;
  box-shadow: ${prop('theme.shadows.depth2')};
  background-size: cover;
  width: 100px;
  height: 100px;

  & .playOverlay {
    display: none;
  }

  &:hover .playOverlay {
    display: flex;
  }
`;

const ButtonBar = styled.div`
  margin-top: 10px;
  height: 30px;
  flex-direction: row;
`;

const Meta = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`;

const Title = styled.span`
  font-size: 1em;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const User = styled.span`
  font-size: .9em;
  margin-top: 5px;
  color: ${props => props.theme.colors.secondaryText}
`;

class Track extends PureComponent {
  static propTypes = {
    track: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool,
    isPlaying: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onQueue: PropTypes.func.isRequired,
    toggleLike: PropTypes.func.isRequired, // TODO: implement
    likeActive: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isPlaying: false,
  };

  _onTrackClicked = e => {
    e.preventDefault();
    this.props.onClick(this.props.track.id, !this.props.isPlaying);
  };

  _onQueueClicked = () => {
    this.props.onQueue(this.props.track.id);
  };

  render() {
    const {
      track,
      connectDragSource,
      connectDragPreview,
      isDragging,
      toggleLike,
      likeActive,
      onQueue,
    } = this.props;

    return (
      <Wrapper isDragging={isDragging} innerRef={el => connectDragSource(el)}>
        <PlayerArtwork
          useImg
          onClick={this._onTrackClicked}
          artworkUrl={track.artwork_url}
        >
          <PlayOverlay
            className="playOverlay"
            trackId={track.id}
            likeActive={track.user_favorite}
            onToggleLike={toggleLike}
            isPlaying={this.props.isPlaying}
          />
        </PlayerArtwork>
        <Meta innerRef={el => connectDragPreview(el)}>
          <Title>
            {track.title}
          </Title>
          <User>{track.user.username}</User>
          <ButtonBar>
            <LikeButton
              onToggle={toggleLike}
              trackId={track.id}
              active={likeActive}
            />
            {track.favoritings_count}
            <QueueButton onClick={onQueue} trackId={track.id} />
          </ButtonBar>
        </Meta>
      </Wrapper>
    );
  }
}

const trackSource = {
  beginDrag(props) {
    return {
      id: props.track.id,
    };
  },

  endDrag(props) {
    return {
      ab: 'bosscher',
      id: props.track.id,
    };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview(),
  };
}

export default DragSource(DRAGGABLE_TYPES.TRACK, trackSource, collect)(Track);
