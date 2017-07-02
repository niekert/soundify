import React from 'react';
import styled from 'styled-components';
import Artwork from 'components/Track/ArtWork';
import { H1, H2 } from 'components/styles/Typography';

const Wrapper = styled.div`
  padding: 60px;
  padding: 5em;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  padding: 15px;
`;

const ArtworkImage = styled(Artwork)`
  width: 100%;
  flex: 1;
  margin-right: 20px;
`;

const TrackInfo = styled.div`
  flex: 2;
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Artist = styled(H2)`
  font-weight: 300;
`;

const Title = styled(H1)`
  font-weight: 600;
`;

const TrackDetails = ({
  artworkUrl,
  title,
  username,
  artistUrl,
  playCount,
  likeCount,
  uploadDate,
  tags,
}) =>
  <Wrapper>
    <ArtworkImage artworkUrl={artworkUrl} useImg />
    <TrackInfo>
      <Artist>
        {username}
      </Artist>
      <Title>
        {title}
      </Title>
    </TrackInfo>
  </Wrapper>;

export default TrackDetails;
