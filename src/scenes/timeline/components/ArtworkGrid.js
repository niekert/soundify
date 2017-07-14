import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import Artwork from 'components/Track/ArtWork';

const Wrapper = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  position: relative;
  height: 200px;
  width: 200px;
  margin-right: 30px;
  box-shadow: ${prop('theme.shadows.depth2')};
`;

const ArtworkWrapper = styled(Artwork)`
  width: 100%;
  height: 100%;
`;

const ArtworkGrid = ({ tracks }) => {
  if (tracks.length < 4) {
    // TODO: don't do this
    return null;
  }
  return (
    <Wrapper>
      {tracks
        .slice(0, 4)
        .map((track, index) =>
          <ArtworkWrapper
            key={`${track.id}-${index}`}
            artworkUrl={track.artwork_url}
            size="200x200"
          />,
        )}
    </Wrapper>
  );
};

ArtworkGrid.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default ArtworkGrid;
