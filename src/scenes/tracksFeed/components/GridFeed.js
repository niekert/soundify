import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Track from './Track';

const Wrapper = styled.ul`
  position: relative;
  padding-top: 15px 0 0 0;
  display: grid;
  grid-template-rows: repeat(auto-fit, 100%);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  width: 100%;
  height: auto;
  user-select: none;
`;

function GridFeed({
  tracks,
  activeTrackId,
  isPlaying,
  queueTrack,
  playTrack,
  pauseTrack,
  feedId,
  toggleLike,
}) {
  return (
    <Wrapper>
      {tracks.map((track, index) =>
        <Track
          key={`${track.id}-${index}`} // eslint-disable-line
          trackIndex={index}
          feedId={feedId}
          userId={track.user.id}
          isPlaying={track.id === activeTrackId && isPlaying}
          track={track}
          toggleLike={toggleLike}
          playTrack={playTrack}
          pauseTrack={pauseTrack}
          onQueue={queueTrack}
        />,
      )}
    </Wrapper>
  );
}

GridFeed.propTypes = {
  playTrack: PropTypes.func.isRequired,
  pauseTrack: PropTypes.func.isRequired,
  queueTrack: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.object),
  feedId: PropTypes.string,
  isPlaying: PropTypes.bool,
  activeTrackId: PropTypes.number,
};

GridFeed.defaultProps = {
  tracks: [],
  activeTrackId: null,
  hasNext: false,
  isPlaying: false,
  feedId: '',
};

export default GridFeed;
