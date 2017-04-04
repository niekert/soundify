import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { OK, INITIAL, PENDING } from 'constants';
import TracklistContainer from 'containers/TracklistContainer';
import Loader from 'components/Loader';
import TimelineHeader from './TimelineHeader';

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
`;

const NoTracks = styled.h1`

`; // TODO: style

class Timeline extends PureComponent {
  static propTypes = {
    timeline: PropTypes.object,
    status: PropTypes.string,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    timeline: null,
    status: INITIAL,
  }

  _renderTrackList() {
    const {
      timeline,
      status,
    } = this.props;

    // Placeholder for when there are no tracks
    if (status === OK && !timeline.tracks.length) {
      return (
        <NoTracks>
          There are no tracks here (yet). add one.
        </NoTracks>
      );
    }

    return (
      <TracklistContainer
        trackIds={timeline.tracks}
        timelineId={this.props.type}
      />
    );
  }

  render() {
    const {
      status,
      timeline,
    } = this.props;

    if (!timeline) {
      return <Loader />;
    }

    console.log('timeline', timeline);

    const isLoading = status !== OK || timeline.status === PENDING;

    return (
      <Wrapper>
        <TimelineHeader
          timelineId={timeline.id}
          title={timeline.title}
          trackCount={timeline.tracks.length}
          duration={timeline.duration}
        />
        {this._renderTrackList()}
        {isLoading && <Loader />}
      </Wrapper>
    );
  }
}

export default Timeline;
