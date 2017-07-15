import React, { PureComponent } from 'react';
import { bool, func, string, array } from 'prop-types';
import { status as statusPropType } from 'PropTypes';
import { isDone } from 'utils/status';
import { ifProp } from 'styled-tools';
import styled from 'styled-components';
import Loader from 'components/Loader';
import { GRID, LIST, feedTypePropType } from '../feedTypes';
import FeedTypePicker from './FeedTypePicker';
import GridFeed from './GridFeed';
import ListFeed from './ListFeed';

const Wrapper = styled.div`
  position: relative;
  padding-left: 10px;
  padding-top: 10px;
`;

const Loading = styled(Loader)`
  position: absolute;
  bottom: -150px;
  display: block;
  width: 100%;
`;

const FetchNextTrigger = styled.div`
  position: absolute;
  bottom: 10px;
  display: ${ifProp('active', 'block', 'none')};
`;

const NoTracks = styled.h2``;

const feedTypesMap = new Map([[GRID, GridFeed], [LIST, ListFeed]]);

class TracksFeed extends PureComponent {
  static propTypes = {
    setTrackFeedType: func.isRequired,
    feedId: string.isRequired,
    tracks: array,
    next: string,
    hasNext: bool,
    fetchNext: func.isRequired,
    status: statusPropType,
    showFeedPicker: bool,
    activeFeedType: feedTypePropType,
  };

  componentDidMount() {
    this.intersectionObserver = new window.IntersectionObserver(entries => {
      const [sentinel] = entries; // Always on first index
      if (sentinel.intersectionRatio > 0 && this.props.hasNext) {
        this.props.fetchNext(this.props.feedId, this.props.next);
      }
    });

    this.intersectionObserver.observe(this._nextObserver);
  }

  _nextObserverRef = c => {
    this._nextObserver = c;
  };

  render() {
    const {
      showFeedPicker = true,
      setTrackFeedType,
      hasNext,
      status,
      activeFeedType = GRID,
      ...props
    } = this.props;
    const Feed = feedTypesMap.get(activeFeedType);

    return (
      <Wrapper>
        {showFeedPicker &&
          <FeedTypePicker
            activeFeedType={activeFeedType}
            setFeedType={setTrackFeedType}
          />}
        <FetchNextTrigger innerRef={this._nextObserverRef} active={hasNext} />
        {isDone(status) && !this.props.tracks.length
          ? <NoTracks>There's nothing here brah</NoTracks>
          : <Feed {...props} />}
        {!isDone(status) && <Loading />}
      </Wrapper>
    );
  }
}

export default TracksFeed;
