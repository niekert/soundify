import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getArtworkUrl } from 'helpers/track';

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
