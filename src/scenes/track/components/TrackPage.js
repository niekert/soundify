import React from 'react';
import { shape, string, func, bool } from 'prop-types';
import styled from 'styled-components';
import TrackDetails from './TrackDetails';

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  margin: 0 auto;
`;

function TrackPage({ track, playTrack, pauseTrack, isPlaying }) {
  return (
    <Wrapper>
      {track &&
        <TrackDetails
          trackId={track.id}
          playTrack={playTrack}
          pauseTrack={pauseTrack}
          isPlaying={isPlaying}
          artworkUrl={track.artwork_url}
          username={track.user.username}
          userUrl={track.user.permalink_url}
          title={track.title}
        />}
    </Wrapper>
  );
}

TrackPage.propTypes = {
  track: shape({
    artwork_url: string,
    username: string,
    permalink_url: string,
    title: string,
  }),
  playTrack: func.isRequired,
  pauseTrack: func.isRequired,
  isPlaying: bool,
};

export default TrackPage;
