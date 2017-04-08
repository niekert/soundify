import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { OK, INITIAL, PENDING } from 'constants';
import TracklistContainer from 'containers/TracklistContainer';
import Loader from 'components/Loader';
import PlaylistHeader from './PlaylistHeader';

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
`;

class Playlist extends PureComponent {
  static propTypes = {
    playlist: PropTypes.object,
    status: PropTypes.string,
    timelineId: PropTypes.string.isRequired,
  };

  static defaultProps = {
    playlist: null,
    status: INITIAL,
  }

  render() {
    const {
      status,
      playlist,
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
              playlistId={playlist.id}
              title={playlist.title}
              trackCount={playlist.tracks.length}
              duration={playlist.duration}
            />,
            <TracklistContainer
              key="tracklist"
              trackIds={playlist.tracks}
              timelineId={timelineId}
            />,
          ]
        }
        {isLoading && <Loader />}
      </Wrapper>
    );
  }
}

export default Playlist;
