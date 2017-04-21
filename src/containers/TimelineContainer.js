import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LikesContainer from 'containers/LikesContainer';
import SearchResultContainer from 'containers/SearchResultContainer';
import styled from 'styled-components';
import { INITIAL, OK } from 'constants';
import { fetchPlaylist, setActiveTimeline } from 'actions/timelineActions';
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
  };

  static defaultProps = {
    playlist: null,
  };

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
  setActiveTimeline,
})(TimelineContainer));
