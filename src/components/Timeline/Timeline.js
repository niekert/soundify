import React, { PureComponent, PropTypes } from 'react';
import { STATUS_OK } from 'constants';
import Track from './Track';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
`

const Loading = styled.div`

`

const TrackContainer = styled.ul`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class Timeline extends PureComponent {
  static propTypes = {
    timeline: PropTypes.object
  };

  _renderTrackList () {
    const { timeline } = this.props;
    const tracks = timeline.tracks.map(track => (
      <Track key={track.id} track={track} onClick={() => console.log('woo')} />
    ));

    return (
      <TrackContainer>
        {tracks}
      </TrackContainer>
    );
  }

  render () {
    const { timeline } = this.props;

    const content =
      timeline && timeline.status === STATUS_OK ?
        this._renderTrackList() :
        <Loading />;

    return (
      <Wrapper>
        {content}
      </Wrapper>
    );
  }
}

export default Timeline;
