import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { STATUS_OK, STATUS_INITIAL } from 'constants';
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
    trackIds: PropTypes.arrayOf(PropTypes.number),
    status: PropTypes.string,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    trackIds: [],
    status: STATUS_INITIAL,
  }

  _renderTrackList() {
    const {
      trackIds,
      status,
    } = this.props;

    // Placeholder for when there are no tracks
    if (status === STATUS_OK && !trackIds.length) {
      return (
        <NoTracks>
          There are no tracks here (yet). add one.
        </NoTracks>
      );
    }

    return (
      <TracklistContainer
        trackIds={trackIds}
        timelineId={this.props.type}
      />
    );
  }

  render() {
    const { status } = this.props;

    const content =
      status === STATUS_OK ?
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
