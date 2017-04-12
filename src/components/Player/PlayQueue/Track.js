import React from 'react';
import PropTypes from 'prop-types';
import ArtWork from 'components/Track/ArtWork';
import { withHandlers, compose } from 'recompose';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Wrapper = styled.li`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const TrackArtwork = styled(ArtWork)`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 2px;
`;

const Meta = styled.div`
  flex: 1;
  margin-left: 10px;
  display: flex;
  font-weight: 300;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 14px;
  text-overflow: ellipsis;
  margin-bottom: .5em;
  white-space: nowrap;
`;

const Artist = styled.span`
  font-size: 12px;
  color: ${prop('theme.colors.secondaryText')};
`;

const Track = ({
  artworkUrl,
  title,
  artist,
  onRemove,
}) => (
  <Wrapper>
    <TrackArtwork artworkUrl={artworkUrl} size="200x200" />
    <Meta>
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
    </Meta>
  </Wrapper>
);
Track.propTypes = {
  artworkUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  onRemove: PropTypes.func, // TODO: Implement
};

export default Track;
