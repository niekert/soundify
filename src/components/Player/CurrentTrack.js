import React, { PropTypes } from 'react';
import { pure } from 'recompose';
import LikeButton from 'components/buttons/LikeButton';
import ArtWork from 'components/Track/ArtWork';
import { compose, withHandlers } from 'recompose';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 33%;
  overflow: hidden;
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
  font-weight: 200;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
`;

const Title = styled.span`
  line-height: 1.2;
  font-size: .8em;
  font-weight: 200;
  max-width: calc(100% - 20px);
  overflow: hidden;
`;

const Artist = styled.span`
  padding-top: 5px;
  font-size: .7em;
  color: ${props => props.theme.colors.secondaryText}
`;

const Row = styled.div`
  display: flex;
`;

const enhance = compose(
  withHandlers({
    onClickLike: ({ toggleLike, track }) => () => toggleLike(track.id, !track.user_favorite),
  })
)

const CurrentTrack = enhance(({
  track,
  onClickLike
}) => (
  <Wrapper>
    {track && [
      <PlayerArtwork artworkUrl={track.artwork_url} key="artwork" />,
      <Meta key="meta">
        <Row>
          <Title>{track.title}</Title>
          <LikeButton
            onClick={onClickLike}
            active={track.user_favorite}
            trackId={track.id} />
        </Row>
        <Artist>{track.user.username}</Artist>
      </Meta>,
    ]}
  </Wrapper>
));

CurrentTrack.propTypes = {
  track: PropTypes.object,
};

export default pure(CurrentTrack);
