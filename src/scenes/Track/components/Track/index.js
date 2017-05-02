import React from 'react';
import TrackDetails from '../TrackDetails';
import { Wrapper } from './styles';

export default ({
  track
}) => (
  <Wrapper>
    {track && (
      <TrackDetails
        artworkUrl={track.artwork_url}
        title={track.title}
      />
    )}
    hallo
  </Wrapper>
);
