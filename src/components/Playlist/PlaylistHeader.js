import React, { PropTypes } from 'react';
import PlayButton from 'components/buttons/PlayButton';
import { onlyUpdateForKeys } from 'recompose';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Wrapper = styled.div`
  padding: 15px 10px;
`;

const Subtitle = styled.span`
  display: block;
  font-size: ${prop('theme.fontSize.subtitle')};
  color: ${prop('theme.colors.secondaryText')};
  font-weight: 300;
  margin-bottom: 0.5em;
`;

const Title = styled.h1`
  font-size: ${prop('theme.fontSize.h1')};
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const TimelineHeader = ({
  timelineId,
  title,
  trackCount,
  duration,
}) => (
  <Wrapper>
    <Subtitle>Playlist</Subtitle>
    <Title>{title}</Title>
    <PlayButton />
  </Wrapper>
);
TimelineHeader.propTypes = {

};


export default TimelineHeader;
