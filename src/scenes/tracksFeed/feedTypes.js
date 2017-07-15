import { oneOf } from 'prop-types';

export const GRID = 'grid';
export const LIST = 'list';
export const FEED_TYPES = [GRID, LIST];

export const feedTypePropType = oneOf([GRID, LIST]);
