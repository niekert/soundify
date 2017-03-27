import { get } from 'lodash';

export const timelineById = (entities, timelines, type) => get(entities, ['timelines', type]);
export const trackIndex = (timeline, trackId) => timeline.trackIds.findIndex(id => id === trackId);


