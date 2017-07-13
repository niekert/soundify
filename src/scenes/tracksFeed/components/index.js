import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import { GRID, LIST, feedTypePropType } from '../feedTypes';
import FeedTypePicker from './FeedTypePicker';
import GridFeed from './GridFeed';
import ListFeed from './ListFeed';

const Wrapper = styled.div`position: relative;`;

const feedTypesMap = new Map([[GRID, GridFeed], [LIST, ListFeed]]);

function TracksFeed({
  showFeedPicker = true,
  setTrackFeedType,
  activeFeedType = GRID,
  ...props
}) {
  const Feed = feedTypesMap.get(activeFeedType);

  return (
    <Wrapper>
      {showFeedPicker &&
        <FeedTypePicker
          activeFeedType={activeFeedType}
          setFeedType={setTrackFeedType}
        />}
      <Feed {...props} />
    </Wrapper>
  );
}
TracksFeed.propTypes = {
  setTrackFeedType: func.isRequired,
  showFeedPicker: bool,
  activeFeedType: feedTypePropType,
};

export default TracksFeed;
