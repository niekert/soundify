import React from 'react';
import { fetchTrack } from 'actions/trackActions';
import { string, object, func } from 'prop-types';
import { trackById, trackStatus } from 'selectors/tracks';
import { connect } from 'react-redux';
import { INITIAL } from 'app-constants';
import Track from './components/Track';

class TrackContainer extends React.Component {
  static propTypes = {
    status: string,
    match: object.isRequired,
    fetchTrack: func.isRequired,
  };

  componentDidMount() {
    const { match, status } = this.props;
    if (status === INITIAL) {
      this.props.fetchTrack(match.params.trackId);
    }
  }

  render() {
    return <Track {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const trackId = ownProps.match.params.trackId;
  return {
    track: trackById(state.entities, trackId),
    status: trackStatus(state, trackId),
  };
};

export default connect(mapStateToProps, { fetchTrack })(TrackContainer);
