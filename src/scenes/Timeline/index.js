import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { INITIAL } from 'app-constants';
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
    status: PropTypes.string.isRequired,
    fetchNext: PropTypes.func.isRequired,
  };

  static defaultProps = {
    playlist: null,
  };

  _onNearEnd = () => {
    const { timeline } = this.props;
    this.props.fetchNext(timeline.id, timeline.next);
  };

  render() {
    const { timeline, status, tracks, timelineId } = this.props;

    return (
      <Wrapper>
        <Route path="/likes" component={LikesContainer} />
        <Route path="/playlist/:id" component={PlaylistContainer} />
        <Route path="/stream" component={StreamContainer} />
        <Route path="/search/:query" component={SearchResultContainer} />
        <Timeline
          timeline={timeline}
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
  const timeline = activeTimeline(state);

  return {
    timeline,
    tracks: activeTimelineTracks(state),
    status: timeline ? timeline.status : INITIAL,
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
