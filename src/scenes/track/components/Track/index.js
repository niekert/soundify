import React from 'react';
import { shape, string } from 'prop-types';
import TrackDetails from '../TrackDetails';
import { Wrapper } from './styles';

function Track({ track }) {
  return (
    <Wrapper>
      {track &&
        <TrackDetails
          artworkUrl={track.artwork_url}
          username={track.user.username}
          userUrl={track.user.permalink_url}
          title={track.title}
        />}
    </Wrapper>
  );
}

Track.propTypes = {
  track: shape({
    artwork_url: string,
    username: string,
    permalink_url: string,
    title: string,
  }),
};
