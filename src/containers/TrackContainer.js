import React, { PureComponent, PropTypes } from 'react';
import Track from 'components/Timeline/Track';

class TrackContainer extends PureComponent {
  static propTypes = {
    trackId: PropTypes.number.isRequired,
    track: PropTypes.object,
    isPlaying: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onQueue: PropTypes.func.isRequired
  };

  render () {
    return (
      <Track
        track={this.props.track}
        onClick={this.props.onClick}
        isPlaying={this.props.isPlaying}
        onQueue={this.props.onQueue}
      />
    );
  }
}
