import React, { PureComponent } from 'react';
import { ipcRenderer } from 'electron';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NEXT, PREV } from 'data/player/actions';
import { alpha } from 'utils/color';
import { CLIENT_ID } from 'app-constants';
import { getArtworkUrl } from 'helpers/track';
import { ifProp, prop } from 'styled-tools';
import TrackContextOverlay from './TrackContextOverlay';
import PlayerContent from './PlayerContent';

const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
  grid-row: 3;
  grid-column: 1 / 3;
  z-index: 100;
  bottom: 0;
  width: 100%;
  height: 75px;
  user-selectable: none;
  background-size: cover !important;
  box-shadow: ${prop('theme.shadows.depth2')};
  background: ${props => (props.artwork ? `url(${getArtworkUrl(props.artwork, '500x500')}) 50% 50% no-repeat` : props.theme.colors.primaryBackground)};
  display: flex;
  justify-content: center;
  transition: transform .2s ease-out;

  &:before {
    ${ifProp('artwork', "content: ''")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => alpha(props.theme.colors.primaryBackground, 0.8)};
  }
`;

const IPC_CHANNEL = 'mediaKeys';
const PLAY_PAUSE = 'play_pause';

class Player extends PureComponent {
  static propTypes = {
    togglePlaying: PropTypes.func.isRequired,
    changeTrack: PropTypes.func.isRequired,
    toggleLike: PropTypes.func.isRequired,
    volume: PropTypes.number.isRequired,
    track: PropTypes.object,
    isPlaying: PropTypes.bool,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    track: null,
    active: false,
    isPlaying: false,
    isActive: false,
  };

  state = {
    totalSeconds: 0,
    playedSeconds: 0,
  };

  componentDidMount() {
    this._audioElement.addEventListener(
      'loadedmetadata',
      this._onMetadataLoaded,
    );

    this._audioElement.addEventListener('timeupdate', this._onTimeUpdate);
    this._audioElement.addEventListener('ended', this._onEnded);
    this._audioElement.addEventListener('canplay', this._onCanPlay);

    this._audioElement.volume = this.props.volume / 100;

    ipcRenderer.on(IPC_CHANNEL, this._onMediaKeyReceived);

    document.addEventListener('keydown', this._onKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.volume !== this.props.volume) {
      this._audioElement.volume = nextProps.volume / 100;
    }
  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.track || prevProps.track.id !== this.props.track.id) &&
      this.props.isPlaying
    ) {
      // this._audioElement.play();
      return;
    }

    if (this.props.isPlaying !== prevProps.isPlaying) {
      if (this.props.isPlaying) {
        this._audioElement.play();
      } else {
        this._audioElement.pause();
      }
    }
  }

  componentWillUnmount() {
    this._audioElement.removeEventListener('timeupdate', this._onTimeUpdate);
    this._audioElement.removeEventListener(
      'loadedmetadata',
      this._onMetadataLoaded,
    );
    this._audioElement.addEventListener('ended', this._onEnded);

    ipcRenderer.removeListener(IPC_CHANNEL, this._onMediaKeyReceived);
    document.removeEventListener('keydown', this._onKeyDown);
  }

  _onMediaKeyReceived = (event, message) => {
    switch (message) {
      case NEXT:
        this._onNext();
        break;
      case PREV:
        this._onPrev();
        break;
      case PLAY_PAUSE:
        this.props.togglePlaying(!this.props.isPlaying);
        break;
      default:
      // DO Nothing. Maybe log?
    }
  };

  _onKeyDown = e => {
    if (
      e.code === 'Space' &&
      this.props.track &&
      e.target.tagName !== 'INPUT'
    ) {
      e.preventDefault();
      this.props.togglePlaying(!this.props.isPlaying);
    }
  };

  _onCanPlay = () => {
    if (this.props.isPlaying && this._audioElement) {
      this._audioElement.play();
    }
  };

  _onNext = () => {
    this.props.changeTrack(NEXT);
  };

  _onPrev = () => {
    if (this.state.playedSeconds > 2) {
      this._audioElement.pause();
      this._audioElement.currentTime = 0;
      this._audioElement.play();
    } else {
      this.props.changeTrack(PREV);
    }
  };

  _onEnded = () => {
    this.props.changeTrack(NEXT);
  };

  _onTogglePlay = () => {
    this.props.togglePlaying(!this.props.isPlaying);
  };

  _onSeek = nextSeconds => {
    this._audioElement.currentTime = nextSeconds; // Woo dihh;
  };

  _onTimeUpdate = () => {
    const playedSeconds = Math.floor(this._audioElement.currentTime);

    if (playedSeconds !== this.state.playedSeconds) {
      this.setState({
        playedSeconds,
      });
    }
  };

  _onMetadataLoaded = () => {
    const totalSeconds = Math.floor(this._audioElement.duration);
    this.setState({
      totalSeconds,
    });
  };

  render() {
    const { track, isPlaying, isActive, toggleLike } = this.props;

    return (
      <Wrapper>
        {track &&
          !!track.artwork_url &&
          <TrackContextOverlay artworkUrl={track.artwork_url} />}
        <audio
          ref={c => (this._audioElement = c)} // eslint-disable-line no-return-assign
          src={track && `${track.stream_url}?client_id=${CLIENT_ID}`}
        />

        <PlayerContent
          totalSeconds={this.state.totalSeconds}
          playedSeconds={this.state.playedSeconds}
          toggleLike={toggleLike}
          track={track}
          isPlaying={isPlaying}
          isActive={isActive}
          onNext={this._onNext}
          onPrev={this._onPrev}
          onSeek={this._onSeek}
          onTogglePlay={this._onTogglePlay}
        />
      </Wrapper>
    );
  }
}

export default Player;
