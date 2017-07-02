import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getArtworkUrl } from 'helpers/track';

const Wrapper = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const ArtWork = ({ artworkUrl, useImg, size, children, ...props }) =>
  <Wrapper
    style={{
      backgroundImage: !useImg && `url(${getArtworkUrl(artworkUrl, size)}`,
    }}
    {...props}
  >
    {useImg && <Image alt={artworkUrl} src={getArtworkUrl(artworkUrl, size)} />}
    {children}
  </Wrapper>;

ArtWork.propTypes = {
  artworkUrl: PropTypes.string,
  useImg: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node,
};
ArtWork.defaultProps = {
  size: '500x500',
};

export default ArtWork;
