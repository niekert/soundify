import React, { PropTypes } from 'react';
import ArtWork from 'components/Track/ArtWork';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 33%;
`;

const PlayerArtwork = styled(ArtWork)`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .3);
`;

const Meta = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  line-height: 1.2;
  font-size: .8em;
`;

const Artist = styled.span`
  padding-top: 5px;
  font-size: .7em;
  color: ${props => props.theme.colors.secondaryText}
`;

const CurrentTrack = ({ track }) => {
  return (
    <Wrapper>
      {track && [
        <PlayerArtwork artworkUrl={track.artwork_url} />,
        <Meta>
          <Title>{track.title}</Title>
          <Artist>{track.user.username}</Artist>
        </Meta>,
      ]}
    </Wrapper>
  );
};

CurrentTrack.PropTypes = {
  track: PropTypes.object,
};

export default CurrentTrack;
