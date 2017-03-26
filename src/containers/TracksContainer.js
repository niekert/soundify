import React, { PureComponent, PropTypes } from 'react';
import { toggleTrack } from 'actions/playerActions';
import Track from 'components/Timeline/Track';
import { connect } from 'react-redux';

class TracksContainer extends PureComponent {
  static PropTypes = {
    toggleTrack: PropTypes.func.isRequired,
    activeTrackId: PropTypes.number,
    trackIds: PropTypes.arrayOf(PropTypes.number),
    timelineId: PropTypes.number,
  }

  static defaultProps = {
    activeTrackId: null,
    trackIds: [],
    timelineId: null
  };


  render () {
    const { trackIds, activeTrackId } = this.props;
    return (
      <ul>

      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

export default connect(mapStateToProps, {
  toggleTrack,
})(TracksContainer);
