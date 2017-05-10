import React from 'react';
import { func, bool } from 'prop-types';
import Player from 'components/Player/Player';
import { togglePlaying, changeTrack, NEXT, PREV } from 'actions/playerActions';
import { ipcRenderer } from 'electron';
import { toggleLike } from 'actions/trackActions';
import { trackById } from 'selectors/tracks';
import { connect } from 'react-redux';

const IPC_CHANNEL = 'mediaKeys';
const PLAY_PAUSE = 'play_pause';

class PlayerContainer extends React.Component {
  static propTypes = {
    changeTrack: func.isRequired,
    togglePlaying: func.isRequired,
    isPlaying: bool,
  };

  componentDidMount() {
    ipcRenderer.on(IPC_CHANNEL, this._onMediaKeyReceived);
  }

  componentWillUnmount() {
    ipcRenderer.removeListener(IPC_CHANNEL, this._onMediaKeyReceived);
  }

  _onMediaKeyReceived = (event, message) => {
    switch (message) {
      case NEXT:
      case PREV:
        this.props.changeTrack(message);
        break;
      case PLAY_PAUSE:
        this.props.togglePlaying(!this.props.isPlaying);
        break;
      default:
        // DO Nothing. Maybe log?
    }
  }

  render() {
    return <Player {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { isPlaying, activeTrackId, active } = state.player;
  const { volumePercentage } = state.settings;

  return {
    isPlaying,
    isActive: active,
    track: trackById(state.entities, activeTrackId),
    volume: volumePercentage,
  };
}

export default connect(mapStateToProps, {
  togglePlaying,
  changeTrack,
  toggleLike,
})(PlayerContainer);
