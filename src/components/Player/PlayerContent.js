import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArtWork from 'components/Track/ArtWork';
import SideControlsContainer from 'containers/SideControlsContainer';
import TrackControls from './TrackControls';
import Controls from './Controls';

const Wrapper = styled.div`
  padding: 0 15px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  z-index: 10;
  align-items: center;
  width: 100%;
`;

const LeftWrapper = styled.div`
  display: flex;
`;

const ActiveTrackArtwork = styled(ArtWork)`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .3);
`;

class PlayerContent extends PureComponent {
  static propTypes = {
    track: PropTypes.object,
    toggleLike: PropTypes.func.isRequired,
    ...Controls.propTypes,
  };

  static defaultProps = {
    track: null,
  };

  render() {
    const { track } = this.props;

    return (
      <Wrapper>
        <LeftWrapper>
          {!!track &&
            <ActiveTrackArtwork artworkUrl={track.artwork_url} key="artwork" />}
          <TrackControls {...this.props} />
        </LeftWrapper>
        <Controls {...this.props} />
        <SideControlsContainer />
      </Wrapper>
    );
  }
}

export default PlayerContent;
