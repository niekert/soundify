import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import { NEXT, PREV } from 'actions/playerActions';
import { CLIENT_ID } from 'constants';
import PlayerContent from './PlayerContent';

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.outline};
  height: 100px;
  background: ${props => props.theme.colors.secondaryBackground};
  display: flex;
  justify-content: center;
  transition: transform .2s ease-out;
`;

class Player extends PureComponent {
  static propTypes = {
    togglePlaying: PropTypes.func.isRequired,
    changeTrack: PropTypes.func.isRequired,
    track: PropTypes.object,
    isPlaying: PropTypes.bool,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    track: null,
    active: false,
    isPlaying: false,
    isActive: false,
  }

  state = {
    totalSeconds: 0,
    playedSeconds: 0,
  };


  componentDidMount() {
    this._audioElement.addEventListener('loadedmetadata', this._onMetadataLoaded);
    this._audioElement.addEventListener('timeupdate', this._onTimeUpdate);
    this._audioElement.addEventListener('ended', this._onEnded);
  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.track || prevProps.track.id !== this.props.track.id) &&
      this.props.isPlaying
    ) {
      this._audioElement.play();
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
    this._audioElement.removeEventListener('loadedmetadata', this._onMetadataLoaded);
    this._audioElement.addEventListener('ended', this._onEnded);
  }

  _onNext = () => {
    this.props.changeTrack(NEXT);
  };

  _onPrev = () => {
    this.props.changeTrack(PREV);
  };

  _onEnded = () => {
    this.props.changeTrack(NEXT);
  };

  _onTogglePlay = () => {
    this.props.togglePlaying(!this.props.isPlaying);
  }

  _onSeek = (nextSeconds) => {
    this._audioElement.currentTime = nextSeconds; // Woo dihh;
  }

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
  }

  render() {
    const {
      track,
      isPlaying,
      isActive,
    } = this.props;

    return (
      <Wrapper>
        <audio
          ref={c => this._audioElement = c} // eslint-disable-line no-return-assign
          src={track && `${track.stream_url}?client_id=${CLIENT_ID}`}
        />
        <PlayerContent
          totalSeconds={this.state.totalSeconds}
          playedSeconds={this.state.playedSeconds}
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
