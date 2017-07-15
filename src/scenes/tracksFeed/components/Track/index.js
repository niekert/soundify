import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'utils/color';
import { DragSource } from 'react-dnd';
import { DRAGGABLE_TYPES } from 'app-constants';
import { prop, ifProp } from 'styled-tools';
import ArtWork from 'components/Track/ArtWork';
import PlayOverlay from './PlayOverlay';

const Wrapper = styled.li`
  position: relative;
  cursor: pointer;
  display: flex;
  min-height: 250px;
  flex-direction: column;
  opacity: ${ifProp('isDragging', 0.8, 1)};
`;

const PlayerArtwork = styled(ArtWork)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  box-shadow: ${prop('theme.shadows.depth2')};
  width: 100%;

  & .playOverlay {
    display: none;
  }

  &:hover .playOverlay {
    display: flex;
  }
`;

const Meta = styled.div`
  margin-top: 10px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: .8em;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserLink = styled(Link)`
  font-size: .7em;
  margin-top: 5px;
  color: ${prop('theme.colors.secondaryText')};
  text-decoration: none;

  &:hover {
    color: ${props => darken(props.theme.colors.secondaryText, 1)}
  }
`;

class Track extends PureComponent {
  static propTypes = {
    track: PropTypes.object.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    feedId: PropTypes.string.isRequired,
    playTrack: PropTypes.func.isRequired,
    pauseTrack: PropTypes.func.isRequired,
    trackIndex: PropTypes.number,
    isDragging: PropTypes.bool,
    isPlaying: PropTypes.bool.isRequired,
    onQueue: PropTypes.func.isRequired,
    toggleLike: PropTypes.func.isRequired, // TODO: implement
  };

  static defaultProps = {
    isPlaying: false,
  };

  _onTrackClicked = e => {
    e.preventDefault();
    const {
      isPlaying,
      feedId,
      playTrack,
      pauseTrack,
      trackIndex,
      track,
    } = this.props;
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack({
        feedId,
        indexInFeed: trackIndex,
        trackId: track.id,
      });
    }
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
            onQueue={this._onQueueClicked}
            likeActive={track.user_favorite}
            onToggleLike={toggleLike}
            isPlaying={this.props.isPlaying}
          />
        </PlayerArtwork>
        <Meta innerRef={el => connectDragPreview(el)}>
          <Title>
            {track.title}
          </Title>
          <UserLink to={`/profile/${track.user.id}`}>
            {track.user.username}
          </UserLink>
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
