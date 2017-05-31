import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OK, INITIAL, PENDING } from 'app-constants';
import Tracklist from 'components/TrackList';
import Loader from 'components/Loader';
import TimelineHeader from './TimelineHeader';

const Wrapper = styled.div`
  display: grid;
  grid-template: auto 1fr / 1fr;
  margin: 20px;
  width: 100%;
  max-height: 0; // Fixes an overflowing bug...
`;

class Timeline extends PureComponent {
  static propTypes = {
    timeline: PropTypes.object,
    tracks: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.string,
    timelineId: PropTypes.string,
    fetchNext: PropTypes.func.isRequired,
  };

  static defaultProps = {
    timeline: null,
    status: INITIAL,
  };

  render() {
    const { status, timeline, tracks, fetchNext, timelineId } = this.props;

    const isReady = !!timeline && timeline.tracks;
    if (!isReady) {
      return <Loader />;
    }
    const isLoading = status !== OK || timeline.status === PENDING;

    return (
      <Wrapper>
        {isReady && [
          <TimelineHeader
            key="header"
            tracks={tracks}
            timeline={timeline}
            timelineId={timelineId}
          />,
          <Tracklist
            tracks={tracks}
            hasNext={!!timeline.next}
            fetchNext={fetchNext}
            timelineId={timelineId}
            key="tracklist"
          />,
        ]}
        {isLoading && <Loader />}
      </Wrapper>
    );
  }
}

export default Timeline;
