import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { activeTimeline, activeTimelineTracks } from 'selectors/timeline';
import withUser from 'containers/hocs/withUser';
import PlaylistContainer from './containers/PlaylistContainer';
import LikesContainer from './containers/LikesContainer';
import SearchResultContainer from './containers/SearchResultContainer';
import { fetchPlaylist, setActiveTimeline, fetchNext } from './actions';
import StreamContainer from './containers/StreamContainer';
import Timeline from './components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
`;

class TimelineContainer extends PureComponent {
  static propTypes = {
    timeline: PropTypes.object,
    timelineId: PropTypes.string,
    tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  static defaultProps = {
    playlist: null,
  };

  render() {
    const { timeline, tracks, timelineId } = this.props;

    return (
      <Wrapper>
        <Route path="/likes" component={LikesContainer} />
        <Route path="/playlist/:id" component={PlaylistContainer} />
        <Route path="/stream" component={StreamContainer} />
        <Route path="/search/:query" component={SearchResultContainer} />
        <Timeline timeline={timeline} tracks={tracks} timelineId={timelineId} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const timeline = activeTimeline(state);

  return {
    timeline,
    tracks: activeTimelineTracks(state),
    timelineId: state.timeline.active,
  };
}

export default withUser(
  connect(mapStateToProps, {
    fetchPlaylist,
    fetchNext,
    setActiveTimeline,
  })(TimelineContainer),
);
