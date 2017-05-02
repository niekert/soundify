import React from 'react';
import styled from 'styled-components';
import Artwork from 'components/Track/ArtWork';
import { H1, H2 } from 'components/styles/Headings';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 60px;
  padding: 5em;
  justify-content: flex-start;
  margin:0 auto;
  max-width: 100%;
  padding: 15px;
`;

const ArtworkImage = styled(Artwork)`
  width: 100%;
  margin-right: 20px;
`;

const Title = styled.h1`
`;

const TrackDetails = ({
  artworkUrl,
  title,
  artistName,
  artistUrl,
  playCount,
  likeCount,
  uploadDate,
  tags,
}) => (
  <Wrapper>
    <ArtworkImage artworkUrl={artworkUrl} useImg />
    <div>
      <H2>{artistName}</H2>
      <H1>{title}</H1>
    </div>
  </Wrapper>
);

export default TrackDetails;
