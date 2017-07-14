import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { alpha } from 'utils/color';
import styled from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import PlaylistDropTarget from './PlaylistDropTarget';
import SidebarLink from './SidebarLink';

const SidebarWrapper = styled.div`
  position: relative;
  width: 200px;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  background: ${prop('theme.colors.primaryBackground')};
  user-select: none;
  z-index: 1;
`;

const LinksWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  max-height: 100%;
  overflow: auto;
  justify-content: space-around;
  align-items: space-around;
`;

const Label = styled.label`
  display: block;
  padding-left: 15px;
  font-weight: 300;
  color: ${prop('theme.colors.secondaryText')};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const NewPlaylist = styled.button`
  background: none;
  margin: auto 0;
  z-index: 10;
  border-top: 1px solid ${props =>
      alpha(props.theme.colors.secondaryText, 0.5)};
  color: ${prop('theme.colors.secondaryText')};
  font-size: ${prop('theme.fontSize.caption')};
  padding: 15px 0;

  &:hover {
    color: ${prop('theme.colors.primaryText')};
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  flex-direction: column;
  margin: auto 0;
  justify-content: center;
`;

const Section = styled.div`
  max-height: 400px;
  overflow: auto;
`;

class Sidebar extends PureComponent {
  static propTypes = {
    addPlaylist: PropTypes.func.isRequired,
    pinnedProfiles: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
      }),
    ),
    playlists: PropTypes.arrayOf(PropTypes.object),
    activeFeedId: PropTypes.string,
  };

  static defaultProps = {
    playlists: [],
  };

  render() {
    const { playlists, addPlaylist, pinnedProfiles, activeFeedId } = this.props;
    const hasPinnedProfiles = pinnedProfiles.length > 0;

    return (
      <SidebarWrapper hasPinnedProfiles={hasPinnedProfiles}>
        <LinksWrapper>
          <SectionWrapper>
            <Label>Your Music</Label>
            <Section>
              <SidebarLink to="/likes" isPlaying={activeFeedId === 'likes'}>
                Likes
              </SidebarLink>
              <SidebarLink to="/stream" isPlaying={activeFeedId === 'stream'}>
                Stream
              </SidebarLink>
            </Section>
          </SectionWrapper>
          {hasPinnedProfiles &&
            <SectionWrapper>
              <Label>Profiles</Label>
              {pinnedProfiles.map(({ userId, userName }) =>
                <SidebarLink
                  key={userId}
                  to={`/profile/${userId}`}
                  isPlaying={activeFeedId && activeFeedId.includes(userId)}
                >
                  {userName}
                </SidebarLink>,
              )}
            </SectionWrapper>}
          <SectionWrapper>
            <Label>Playlists</Label>
            <Section>
              {playlists.map(({ title, id }) =>
                <PlaylistDropTarget key={`playlist-${id}`}>
                  <SidebarLink
                    isPlaying={activeFeedId === `playlist::${id}`}
                    to={`/playlist/${id}`}
                  >
                    {title}
                  </SidebarLink>
                </PlaylistDropTarget>,
              )}
            </Section>
          </SectionWrapper>
        </LinksWrapper>
        <NewPlaylist onClick={addPlaylist}>Add Playlist</NewPlaylist>
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
