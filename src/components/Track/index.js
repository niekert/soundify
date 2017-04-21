import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import ArtWork from 'components/Track/ArtWork';
import PlayOverlay from './PlayOverlay';

const Wrapper = styled.li`
  position: relative;
  margin-right: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 200px;
`;

const PlayerArtwork = styled(ArtWork)`
  position: relative;
  background-repeat: none;
  box-shadow: ${prop('theme.shadows.depth2')};
  background-size: cover;
  width: 100%;
  height: 200px;

  & .playOverlay {
    display: none;
  }

  &:hover .playOverlay {
    display: flex;
  }
`;

const Meta = styled.div`
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

const User = styled.span`
  font-size: .7em;
  margin-top: 5px;
  color: ${props => props.theme.colors.secondaryText}
`;

class Track extends PureComponent {
  static propTypes = {
    track: PropTypes.object.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onQueue: PropTypes.func.isRequired,
    toggleLike: PropTypes.func.isRequired, // TODO: implement
  };

  static defaultProps = {
    isPlaying: false,
  };

  _onTrackClicked = (e) => {
    e.preventDefault();
    this.props.onClick(this.props.track.id, !this.props.isPlaying);
  }

  _onQueueClicked = () => {
    this.props.onQueue(this.props.track.id);
  }

  _onToggleLike = (e) => {
    e.preventDefault();
    const { track, toggleLike } = this.props;
    toggleLike(track.id, !track.user_favorite);
  }

  render() {
    const {
      track,
    } = this.props;

    return (
      <Wrapper>
        <PlayerArtwork
          onClick={this._onTrackClicked}
          artworkUrl={track.artwork_url}
        >
          <PlayOverlay
            className="playOverlay"
            onQueue={this._onQueueClicked}
            likeActive={track.user_favorite}
            onToggleLike={this._onToggleLike}
            isPlaying={this.props.isPlaying}
          />
        </PlayerArtwork>
        <Meta>
          <Title>{track.title}</Title>
          <User>{track.user.username}</User>
        </Meta>
      </Wrapper>
    );
  }
}

export default Track;

