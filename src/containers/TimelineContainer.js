import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LikesContainer from 'containers/LikesContainer';
import { INITIAL, OK } from 'constants';
import { fetchPlaylist, setActiveTimeline } from 'actions/timelineActions';
import { Route } from 'react-router-dom';
import { activeTimeline } from 'selectors/timeline';
import withUser from 'containers/hocs/withUser';
import Playlist from '../components/Playlist/Playlist';
import PlaylistContainer from './PlaylistContainer';

class TimelineContainer extends PureComponent {
  static propTypes = {
    playlist: PropTypes.object,
    match: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
  };

  static defaultProps = {
    playlist: null,
  };

  render() {
    const {
      playlist,
      status,
      match,
     } = this.props;

    return (
      <div>
        <Route path="/likes" component={LikesContainer} />
        <Route path="/playlist/:id" component={PlaylistContainer} />
        <Playlist
          playlist={playlist}
          status={status}
          timelineId={`playlist::${match.params.id}`}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const playlist = activeTimeline(state);

  return {
    playlist,
    status: playlist ? playlist.status : INITIAL,
  };
}

export default withUser(connect(mapStateToProps, {
  fetchPlaylist,
  setActiveTimeline,
})(TimelineContainer));
