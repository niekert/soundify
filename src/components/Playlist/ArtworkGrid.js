import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Artwork from 'components/Track/ArtWork';

const Wrapper = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  position: relative;
  height: 200px;
  width: 200px;
`;

const ArtworkWrapper = styled(Artwork)`
  width: 100%;
  height: 100%;
`;

const ArtworkGrid = ({
  tracks,
}) => (
  <Wrapper>
    {tracks.slice(0, 4).map(track => {
    })}
     {/*(
      <ArtworkWrapper
        artworkUrl={track.artwork_url}
        size="100x100"
      />
    ))}*/}
  </Wrapper>
);
ArtworkGrid.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ArtworkGrid;
