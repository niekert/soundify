import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import ArtWork from 'components/Track/ArtWork';
import PlayOverlay from './PlayOverlay';

const Wrapper = styled.li`
  position: relative;
  margin: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 270px;
  width: 200px;
  background: ${props => props.theme.colors.secondaryBackground}
`;

const PlayerArtwork = styled(ArtWork)`
  position: relative;
  background-repeat: none;
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
  padding: 0 15px;
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
  color: ${props => props.theme.colors.primaryText}
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
  };

  static defaultProps = {
    isPlaying: false,
  };

  _onTrackClicked = () => {
    this.props.onClick(this.props.track.id, !this.props.isPlaying);
  }

  render () {
    const { track } = this.props;

    return (
      <Wrapper>
        <PlayerArtwork
          onClick={this._onTrackClicked}
          artworkUrl={track.artwork_url}
        >
          <PlayOverlay
            className="playOverlay"
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

