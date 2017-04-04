import { get } from 'lodash';

export const trackIdsFromQuery = (searchResults, query) =>  get(searchResults, [query,'tracks']) || [];
