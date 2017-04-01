import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { OK, INITIAL } from 'constants';
import TracklistContainer from 'containers/TracklistContainer';
import Loader from 'components/Loader';

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
    const { status } = this.props;

    const content =
      status === OK ?
        this._renderTrackList() :
        <Loader />;

    return (
      <Wrapper>
        {content}
      </Wrapper>
    );
  }
}

export default Timeline;
