import React, { PropTypes } from 'react';
import PlayButton from 'components/buttons/PlayButton';
import styled from 'styled-components';
import { formatPlaytime } from 'helpers/format';
import { pure } from 'recompose';
import { prop } from 'styled-tools';

const Wrapper = styled.div`
  padding: 15px 10px;
`;

const Subtitle = styled.span`
  display: block;
  font-size: ${prop('theme.fontSize.subtitle')};
  color: ${prop('theme.colors.secondaryText')};
  font-weight: 300;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: ${prop('theme.fontSize.h1')};
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const PlaylistHeader = ({
  playlist,
}) => (
  <Wrapper>
    <Subtitle>Playlist</Subtitle>
    <Title>{playlist.title}</Title>
    {playlist.kind === 'playlist' &&
      <Subtitle>
        Created by {playlist.user.username} ● {playlist.tracks.length} tracks, {formatPlaytime(playlist.duration)}
      </Subtitle>
    }
    <PlayButton />
  </Wrapper>
);
PlaylistHeader.propTypes = {
  playlist: PropTypes.object.isRequired,
};


export default pure(PlaylistHeader);
