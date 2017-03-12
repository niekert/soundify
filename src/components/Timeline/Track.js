import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 270px;
  width: 200px;
  background: ${props => props.theme.colors.secondaryBackground}
`

const ArtWork = styled.div`
  background-repeat: none;
  background-size: cover;
  width: 100%;
  height: 200px;
  background-image: url(${props => props.url});
`

const Meta = styled.div`
  padding: 0 15px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const Title = styled.span`
  font-size: .8em;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors.primaryText}
`

const User = styled.span`
  font-size: .7em;
  margin-top: 5px;
  color: ${props => props.theme.colors.secondaryText}
`


function getArtworkUrl (ArtWorkUrl) {
  if (!ArtWorkUrl) {
    return null; // TODO: default artwork
  }

  return ArtWorkUrl.replace('large.jpg', 't500x500.jpg');
}

const Track = ({ onClick, track }) => {
  return (
    <Wrapper>
      <ArtWork url={getArtworkUrl(track.artwork_url)}>

      </ArtWork>
      <Meta>
        <Title>{track.title}</Title>
        <User>{track.user.username}</User>
      </Meta>
    </Wrapper>
  )
}

Track.propTypes = {
  track: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Track;

