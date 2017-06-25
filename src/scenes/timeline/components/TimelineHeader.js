import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from 'components/buttons/PlayButton';
import styled from 'styled-components';
import { formatPlaytime } from 'helpers/format';
import { H1 } from 'components/styles/Headings';
import { pure } from 'recompose';
import { prop } from 'styled-tools';
import ArtworkGrid from './ArtworkGrid';

const Wrapper = styled.div`
  display: flex;
  padding: 15px 10px;
margin-bottom: 20px;
`;

const Subtitle = styled.span`
  display: block;
  font-size: ${prop('theme.fontSize.subtitle')};
  color: ${prop('theme.colors.reverse.primaryText')};
  font-weight: 300;
  margin-bottom: 10px;
`;

const Title = styled(H1)`
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const TimelineHeader = ({ timeline, tracks, timelineId }) => (
  <Wrapper>
    <ArtworkGrid tracks={tracks} />
    <div>
      <Subtitle>{timeline.type || 'playlist'}</Subtitle>
      <Title>{timeline.title}</Title>
      {timeline.kind === 'timeline' &&
        <Subtitle>
          Created by {timeline.user.username} ● {timeline.tracks.length} tracks,
          {formatPlaytime(timeline.duration)}
        </Subtitle>}
      {tracks.length > 0 &&
        <PlayButton trackId={tracks[0].id} timelineId={timelineId} />}
    </div>
  </Wrapper>
);
TimelineHeader.propTypes = {
  timeline: PropTypes.object.isRequired,
  timelineId: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.object),
};

export default pure(TimelineHeader);
