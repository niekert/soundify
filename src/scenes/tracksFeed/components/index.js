import React from 'react';
import { oneOf } from 'prop-types';
import { GRID, LIST } from '../feedTypes';
import GridFeed from './GridFeed';

const feedTypesMap = new Map([[GRID, GridFeed]]);

function TracksFeed({ feedType = GRID, ...props }) {
  const Feed = feedTypesMap.get(feedType);
  return <Feed {...props} />;
}
TracksFeed.propTypes = {
  feedType: oneOf([GRID, LIST]),
};

export default TracksFeed;
