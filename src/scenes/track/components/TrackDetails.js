import React from 'react';
import { string, number, func, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { withHandlers } from 'recompose';
import PlayIcon from 'components/icons/Play';
import PauseIcon from 'components/icons/Pause';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import TrackTabBarContainer from 'containers/TrackTabBarContainer';
import Artwork from 'components/Track/ArtWork';
import { H1, H2 } from 'components/styles/Typography';
import TagBar from './TagBar';

const Wrapper = styled.div`
  padding: 60px;
  padding: 0em;
  display: flex;
  justify-content: center;
  margin-bottom: ${prop('theme.spacing.space1')};
  align-self: stretch;
  flex-shrink: 0;
  max-width: 100%;
`;

const ArtworkImage = styled(Artwork)`
  width: 100%;
  min-width: 200px;
  min-height: 200px;
  flex: 1;
  max-height: 300px;
  max-width: 300px;
  margin-right: 20px;
  border-radius: 3px;

  img {
    box-shadow: ${prop('theme.shadows.depth2')};
  }
`;

const TrackInfo = styled.div`
  flex: 2;
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const InfoBar = styled.div`
  position: absolute;
  bottom: 10px;
`;

const ArtistLink = styled(Link)`
  color: inherit;
  font-size: 1.5em;
  opacity: .8;
  line-height: ${prop('theme.lineHeights.heading')};
  margin-bottom: .5em;
  text-decoration: none;
  font-weight: 300;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled(H1)`
  font-weight: 600;
`;

const PlayButton = styled.button`
  padding: 0;
  border-radius: 50%;
  padding: 5px;
  width: 50px;
  height: 50px;
  align-self: center;
  border: 2px solid ${prop('theme.colors.cta')};
  color: ${prop('theme.colors.cta')};
  background: none;
  cursor: pointer;

  svg {
    transition: transform .2s ease-out;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

const TrackDetails = ({
  trackId,
  artworkUrl,
  userId,
  title,
  isPlaying,
  tags,
  username,
  onClick, // eslint-disable-line
}) =>
  <Wrapper>
    <ArtworkImage artworkUrl={artworkUrl} useImg />
    <PlayButton onClick={onClick}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </PlayButton>
    <TrackInfo>
      <ArtistLink to={`/profile/${userId}`}>
        {username}
      </ArtistLink>
      <Title>
        {title}
      </Title>
      {!!tags && <TagBar tags={tags} />}
      <InfoBar>
        <TrackTabBarContainer trackId={trackId} />
      </InfoBar>
    </TrackInfo>
  </Wrapper>;

const enhance = withHandlers({
  onClick: ({ playTrack, pauseTrack, isPlaying, trackId }) => () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack({ trackId });
    }
  },
});

TrackDetails.propTypes = {
  trackId: number.isRequired,
  userId: number.isRequired,
  artworkUrl: string.isRequired,
  title: string.isRequired,
  username: string.isRequired,
  tags: string,
  isPlaying: bool,
  playTrack: func.isRequired, // eslint-disable-line
  pauseTrack: func.isRequired, // eslint-disable-line
};

TrackDetails.defaultProps = {
  tags: null,
};

export default enhance(TrackDetails);
