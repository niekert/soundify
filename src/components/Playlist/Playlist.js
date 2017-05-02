import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OK, INITIAL, PENDING } from 'constants';
import Tracklist from 'components/TrackList';
import Loader from 'components/Loader';
import PlaylistHeader from './PlaylistHeader';

const Wrapper = styled.div`
  display: grid;
  grid-template: auto 1fr / 1fr;
  padding-top: 20px;
  padding-left: 20px;
  max-height: 0; // Fixes an overflowing bug...
`;

class Playlist extends PureComponent {
  static propTypes = {
    playlist: PropTypes.object,
    tracks: PropTypes.arrayOf(PropTypes.object),
    status: PropTypes.string,
    timelineId: PropTypes.string,
    fetchNext: PropTypes.func.isRequired,
  };

  static defaultProps = {
    playlist: null,
    status: INITIAL,
  }

  render() {
    const {
      status,
      playlist,
      tracks,
      fetchNext,
      timelineId,
    } = this.props;

    const isReady = !!playlist && playlist.tracks;
    if (!isReady) {
      return <Loader />;
    }
    const isLoading = status !== OK || playlist.status === PENDING;

    return (
      <Wrapper>
        {isReady &&
          [
            <PlaylistHeader
              key="header"
              tracks={tracks}
              playlist={playlist}
              timelineId={timelineId}
            />,
            <Tracklist
              tracks={tracks}
              hasNext={!!playlist.next}
              fetchNext={fetchNext}
              timelineId={timelineId}
              key="tracklist"
            />,
          ]
        }
        {isLoading && <Loader />}
      </Wrapper>
    );
  }
}

export default Playlist;
