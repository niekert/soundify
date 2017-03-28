import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TrackListContainer from 'containers/TracklistContainer';
import { STATUS_INITIAL, STATUS_PENDING, STATUS_OK } from 'constants';
import Loader from './Loader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 26px;
  padding: 15px;
`;

const SearchResults = ({ trackIds, status, query }) => {
  return (
    <Wrapper>
      <Title>Search results for {decodeURI(query)}</Title>
      {status === STATUS_OK ?
        <TrackListContainer
          trackIds={trackIds}
          timelineId={`search::${query}`}
        /> :
        <Loader />
      }
    </Wrapper>
  );
};
SearchResults.propTypes = {
  query: PropTypes.string,
  status: PropTypes.string,
  trackIds: PropTypes.arrayOf(PropTypes.number),
};
SearchResults.defaultProps = {
  query: '',
  status: STATUS_INITIAL,
  trackIds: [],
};

export default SearchResults;
