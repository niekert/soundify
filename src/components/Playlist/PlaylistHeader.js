import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from 'components/buttons/PlayButton';
import styled from 'styled-components';
import { formatPlaytime } from 'helpers/format';
import { H1 } from 'components/styles/Headings';
import { pure } from 'recompose';
import { prop } from 'styled-tools';
import ArtworkGrid from './ArtworkGrid';

const Wrapper = styled.div`
  display: flex;
  padding: 15px 10px;
  margin-bottom: 20px;
`;

const Subtitle = styled.span`
  display: block;
  font-size: ${prop('theme.fontSize.subtitle')};
  color: ${prop('theme.colors.reverse.primaryText')};
  font-weight: 300;
  margin-bottom: 10px;
`;

const Title = styled(H1)`
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const PlaylistHeader = ({
  playlist,
  tracks,
  timelineId,
}) => (
  <Wrapper>
    <ArtworkGrid tracks={tracks} />
    <div>
      <Subtitle>{playlist.type || 'Playlist'}</Subtitle>
      <Title>{playlist.title}</Title>
      {playlist.kind === 'playlist' &&
        <Subtitle>
          Created by {playlist.user.username} ● {playlist.tracks.length} tracks, {formatPlaytime(playlist.duration)}
        </Subtitle>
      }
      <PlayButton
        trackId={tracks[0].id}
        timelineId={timelineId}
      />
    </div>
  </Wrapper>
);
PlaylistHeader.propTypes = {
  playlist: PropTypes.object.isRequired,
  timelineId: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.object),
};


export default pure(PlaylistHeader);
