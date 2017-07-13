import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Track from './Track';

const Wrapper = styled.ul`
  position: relative;
  padding-top: 15px;
  margin-left: 10px;
  display: grid;
  grid-template-rows: repeat(auto-fit, 250px);
  grid-template-columns: repeat(auto-fit, 200px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  width: 100%;
  height: auto;
  user-select: none;
`;

function TrackList({
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

TrackList.propTypes = {
  playTrack: PropTypes.func.isRequired,
  pauseTrack: PropTypes.func.isRequired,
  queueTrack: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.object),
  feedId: PropTypes.string,
  isPlaying: PropTypes.bool,
  activeTrackId: PropTypes.number,
};

TrackList.defaultProps = {
  tracks: [],
  activeTrackId: null,
  hasNext: false,
  isPlaying: false,
  feedId: '',
};

export default TrackList;
