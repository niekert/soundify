import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { alpha } from 'utils/color';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import PlaylistDropTarget from './PlaylistDropTarget';
import SidebarLink from './SidebarLink';

const SidebarWrapper = styled.div`
  position: relative;
  width: 200px;
  overflow: hidden;
  position: relative;
  grid-row: 1 / 3;
  display: grid;
  grid-template-rows: 1fr 1fr 50px;
  background: ${prop('theme.colors.primaryBackground')};
  user-select: none;
  z-index: 1;
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
  border-top: 1px solid ${props => alpha(props.theme.colors.secondaryText, 0.5)};
  color: ${prop('theme.colors.secondaryText')};
  font-size: ${prop('theme.fontSize.caption')};
  padding: 15px 0;

  &:hover {
    color: ${prop('theme.colors.primaryText')};
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
`;

const Section = styled.div`
  max-height: 400px;
  overflow: auto;
`;

class Sidebar extends PureComponent {
  static propTypes = {
    addPlaylist: PropTypes.func.isRequired,
    playlists: PropTypes.arrayOf(PropTypes.object),
    activeFeedId: PropTypes.string,
  };

  static defaultProps = {
    playlists: [],
  };

  render() {
    const { playlists, addPlaylist, activeFeedId } = this.props;

    return (
      <SidebarWrapper>
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
        <SectionWrapper>
          <Label>Playlists</Label>
          <Section>
            {playlists.map(({ title, id }) => (
              <PlaylistDropTarget key={`playlist-${id}`}>
                <SidebarLink
                  isPlaying={activeFeedId === `playlist::${id}`}
                  to={`/playlist/${id}`}
                >
                  {title}
                </SidebarLink>
              </PlaylistDropTarget>
            ))}
          </Section>
        </SectionWrapper>
        <NewPlaylist onClick={addPlaylist}>
          Add Playlist
        </NewPlaylist>
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
