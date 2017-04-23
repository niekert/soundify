import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LikesContainer from 'containers/LikesContainer';
import SearchResultContainer from 'containers/SearchResultContainer';
import styled from 'styled-components';
import { INITIAL } from 'constants';
import { fetchPlaylist, setActiveTimeline, fetchNext } from 'actions/timelineActions';
import { Route } from 'react-router-dom';
import { activeTimeline, activeTimelineTracks } from 'selectors/timeline';
import withUser from 'containers/hocs/withUser';
import Playlist from '../components/Playlist/Playlist';
import PlaylistContainer from './PlaylistContainer';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
`;

class TimelineContainer extends PureComponent {
  static propTypes = {
    playlist: PropTypes.object,
    timelineId: PropTypes.string,
    tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
    status: PropTypes.string.isRequired,
    fetchNext: PropTypes.func.isRequired,
  };

  static defaultProps = {
    playlist: null,
  };

  _onNearEnd = () => {
    const { playlist } = this.props;
    this.props.fetchNext(playlist.id, playlist.next);
  }

  render() {
    const {
      playlist,
      status,
      tracks,
      timelineId,
     } = this.props;

    return (
      <Wrapper>
        <Route path="/likes" component={LikesContainer} />
        <Route path="/playlist/:id" component={PlaylistContainer} />
        <Route path="/search/:query" component={SearchResultContainer} />
        <Playlist
          playlist={playlist}
          tracks={tracks}
          status={status}
          fetchNext={this._onNearEnd}
          timelineId={timelineId}
        />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const playlist = activeTimeline(state);

  return {
    playlist: activeTimeline(state),
    tracks: activeTimelineTracks(state),
    status: playlist ? playlist.status : INITIAL,
    timelineId: state.timeline.active,
  };
}

export default withUser(connect(mapStateToProps, {
  fetchPlaylist,
  fetchNext,
  setActiveTimeline,
})(TimelineContainer));
