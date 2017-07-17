import React from 'react';
import { shape, string, func, bool } from 'prop-types';
import styled from 'styled-components';
import TrackComments from 'scenes/trackComments';
import TrackDetails from './TrackDetails';

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  margin: 0 auto;
`;

export const CommentsWrapper = styled.div`margin-left: 15px;`;

function TrackPage({ track, playTrack, pauseTrack, isPlaying }) {
  return (
    <Wrapper>
      {track && [
        <TrackDetails
          key="track-details"
          trackId={track.id}
          playTrack={playTrack}
          pauseTrack={pauseTrack}
          isPlaying={isPlaying}
          artworkUrl={track.artwork_url}
          username={track.user.username}
          userUrl={track.user.permalink_url}
          tags={track.tag_list}
          title={track.title}
        />,
        <TrackComments key="track-comments" trackId={track.id} />,
      ]}
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
