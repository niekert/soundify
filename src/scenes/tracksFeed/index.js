import React from 'react';
import { connect } from 'react-redux';
import { fetchNext } from './actions';
import { makeFeedSelector } from './selectors';
import TrackFeed from './components';

const makeMapStateToProps = () => {
  const getFeed = makeFeedSelector();

  return function mapStateToProps(state, props) {
    return {
      feedId: props.feedId,
      ...getFeed(state, props),
    };
  };
};

const actions = {
  fetchNext,
};

export default connect(makeMapStateToProps, actions)(TrackFeed);
