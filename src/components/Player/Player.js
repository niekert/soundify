import React, { PropTypes, PureComponent } from 'react';
import styled from 'styled-components';
import { NEXT, PREV } from 'actions/playerActions';
import { CLIENT_ID } from 'constants';
import PlayerContent from './PlayerContent';

const Wrapper = styled.div`
  position: fixed;
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
    active: PropTypes.bool.isRequired,
    track: PropTypes.object,
    isPlaying: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    track: null,
  }

  state = {
    totalSeconds: 0,
    playedSeconds: 0,
  };


  componentDidMount() {
    console.log(this._audioElement);

    this._audioElement.addEventListener('loadedmetadata', this._onMetadataLoaded);
    this._audioElement.addEventListener('timeupdate', this._onTimeUpdate);
    // this._audioElement.addEventListener('play', this._onPlay);
    // this._audioElement.addEventListener('pause', this._onPause);
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
    // this._audioElement.removeEventListener('play', this._onPlay);
    // this._audioElement.removeEventListener('pause', this._onPause);
  }


  _onNext = () => {
    this.props.changeTrack(NEXT);
  };

  _onPrev = () => {
    console.log('prev');
    this.props.changeTrack(PREV);
  };

  _onTogglePlay = () => {
    this.props.togglePlaying(!this.props.isPlaying);
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
      active,
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
          onNext={this._onNext}
          onPrev={this._onPrev}
          onTogglePlay={this._onTogglePlay}
        />
      </Wrapper>
    );
  }
}

export default Player;
