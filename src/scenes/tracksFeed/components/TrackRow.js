import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Wrapper = styled.div`
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
`;

function TrackRow({ track }) {
  return (
    <Wrapper>
      <Column columnIndex={1}>Play</Column>
      <Column columnIndex={2}>Like</Column>
      <Column columnIndex={3}>
        {track.title}
      </Column>
      <Column columnIndex={4}>
        {track.user.username}
      </Column>
      <Column columnIndex={5}>
        {track.user.username}
      </Column>
      <Column columnIndex={6}>
        {track.user.username}
      </Column>
    </Wrapper>
  );
}

export default TrackRow;
