import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { INITIAL } from 'app-constants';
import TracksFeedContainer from 'scenes/tracksFeed';
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
    timelineId: PropTypes.string,
  };

  static defaultProps = {
    timeline: null,
    status: INITIAL,
  };

  render() {
    const { timeline, tracks, timelineId } = this.props;

    const isReady = !!timeline && timeline.tracks;
    if (!isReady) {
      return <Loader />;
    }

    return (
      <Wrapper>
        {isReady && [
          <TimelineHeader
            key="header"
            tracks={tracks}
            timeline={timeline}
            timelineId={timelineId}
          />,
          <TracksFeedContainer feedId={timelineId} key="tracklist" />,
        ]}
      </Wrapper>
    );
  }
}

export default Timeline;
