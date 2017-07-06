import React from 'react';
import { shape, string } from 'prop-types';
import styled from 'styled-components';
import TrackDetails from './TrackDetails';

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  margin: 0 auto;
`;

function TrackPage({ track }) {
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

TrackPage.propTypes = {
  track: shape({
    artwork_url: string,
    username: string,
    permalink_url: string,
    title: string,
  }),
};

export default TrackPage;
