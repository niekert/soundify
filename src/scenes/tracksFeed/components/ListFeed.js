import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { func, arrayOf, string, bool, number, object } from 'prop-types';
import styled from 'styled-components';
import { prop, ifProp } from 'styled-tools';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 24px 24px repeat(auto-fit, minMax(186px, auto));
  grid-template-rows: auto;
`;

const Column = styled.div`
  border-bottom: 1px solid ${prop('theme.colors.reverse.secondaryText')};
  cursor: default;
  user-select: none;
  font-size: 12px;
  padding: 10px 10px 10px 0;
  grid-column: ${prop('columnIndex')};
  white-space: nowrap;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  background: ${ifProp('isActive', 'green', 'none')};
`;

const HeadingColumn = styled(Column)`
  border-bottom: 1px solid ${prop('theme.colors.reverse.primaryText')};
  text-transform: uppercase;
`;

const enhance = compose(
  withState('selectedTrackId', 'setSelectedTrackId', null),
  withState('hoveredTrackId', 'setHoveredTrackId', null),
  withHandlers({
    handleMouseEnter: ({ setHoveredTrackId }) => e => {
      setHoveredTrackId(parseInt(e.target.dataset.id, 10));
    },
    handleMouseLeave: ({ setHoveredTrackId }) => e => setHoveredTrackId(null),
  }),
);

function ListFeed({
  playTrack,
  pauseTrack,
  queueTrack,
  toggleLike,
  tracks,
  feedId,
  isPlaying,
  activeTrackId,
  handleMouseLeave,
  handleMouseEnter,
  selectedTrackId,
  hoveredTrackId,
}) {
  return (
    <Wrapper onMouseLeave={handleMouseLeave}>
      <HeadingColumn columnIndex={1} />
      <HeadingColumn columnIndex={2} />
      <HeadingColumn columnIndex={3}>Title</HeadingColumn>
      <HeadingColumn columnIndex={4}>Artist</HeadingColumn>
      <HeadingColumn columnIndex={5}>Date</HeadingColumn>
      <HeadingColumn columnIndex={6}>Duration</HeadingColumn>

      {tracks.map((track, index) => {
        const sharedProps = {
          'data-id': track.id,
          onMouseEnter: handleMouseEnter,
          isActive: hoveredTrackId === track.id,
        };

        return [
          <Column {...sharedProps} key={`play-${track.id}`} columnIndex={1}>
            Play
          </Column>,
          <Column {...sharedProps} key={`like-${track.id}`} columnIndex={2}>
            Like
          </Column>,
          <Column {...sharedProps} key={`title-${track.id}`} columnIndex={3}>
            {track.title}
          </Column>,
          <Column {...sharedProps} key={`user-${track.id}`} columnIndex={4}>
            {track.user.username}
          </Column>,
          <Column {...sharedProps} key={`date-${track.id}`} columnIndex={5}>
            {track.user.username}
          </Column>,
          <Column {...sharedProps} key={`duration-${track.id}`} columnIndex={6}>
            {track.user.username}
          </Column>,
        ];
      })}
    </Wrapper>
  );
}
ListFeed.propTypes = {
  playTrack: func.isRequired,
  pauseTrack: func.isRequired,
  queueTrack: func.isRequired,
  toggleLike: func.isRequired,
  tracks: arrayOf(object),
  feedId: string,
  isPlaying: bool,
  activeTrackId: number,
};

export default enhance(ListFeed);
