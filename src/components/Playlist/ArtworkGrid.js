import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Artwork from 'components/track/ArtWork';

const ArtworkGrid = ({
  tracks,
}) => (
  <div></div>
);
ArtworkGrid.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ArtworkGrid;
