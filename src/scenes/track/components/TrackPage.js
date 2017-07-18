import React from 'react';
import { shape, string, func, bool } from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import TrackComments from 'scenes/trackComments';
import TrackDetails from './TrackDetails';

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  margin: 0 auto;
`;

const BottomWrapper = styled.div`
  margin-top: ${prop('theme.spacing.space2')};
  display: flex;
`;

const CommentsContainer = styled.div`flex: 2;`;

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
        <BottomWrapper key="bottomWrapper">
          <CommentsContainer>
            <TrackComments trackId={track.id} />
          </CommentsContainer>
          <div style={{ flex: 1 }} />
        </BottomWrapper>,
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
