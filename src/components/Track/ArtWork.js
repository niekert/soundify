import React, { PropTypes } from 'react';
import styled from 'styled-components';

function getArtworkUrl(artworkUrl, size) {
  if (!artworkUrl) {
    return null; // TODO: default artwork
  }

  // TODO: Artwork type
  return artworkUrl.replace('large.jpg', `t${size}.jpg`);
}


const Wrapper = styled.div`
  position: relative;
  background-repeat: none;
  background-size: cover;
  width: 100%;
  height: 200px;
  background-image: url(${props => props.url});
`;

const ArtWork = ({ artworkUrl, size, ...props }) => (
  <Wrapper url={getArtworkUrl(artworkUrl, size)} {...props} />
);

ArtWork.propTypes = {
  artworkUrl: PropTypes.string,
  size: PropTypes.string,
};
ArtWork.defaultProps = {
  size: '500x500',
};

export default ArtWork;
