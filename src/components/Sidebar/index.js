import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { alpha } from 'utils/color';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import SidebarLink from './SidebarLink';

const SidebarWrapper = styled.div`
  position: relative;
  width: 200px;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${prop('theme.colors.primaryBackground')};
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
  border-top: 1px solid ${props => alpha(props.theme.colors.secondaryText, 0.5)};
  color: ${prop('theme.colors.secondaryText')};
  font-size: ${prop('theme.fontSize.caption')};
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px 0;

  &:hover {
    color: ${prop('theme.colors.primaryText')};
  }
`;

const Section = styled.div`
  flex-basis: 33%;
`;

class Sidebar extends PureComponent {
  static propTypes = {
    addPlaylist: PropTypes.func.isRequired,
    playlists: PropTypes.arrayOf(PropTypes.object),
    activeTimelineId: PropTypes.string,
  };

  static defaultProps = {
    playlists: [],
  }

  render() {
    const {
      playlists,
      addPlaylist,
      activeTimelineId,
    } = this.props;

    return (
      <SidebarWrapper>
        <Section>
          <Label>Your Music</Label>
          <SidebarLink
            to="/likes"
            isPlaying={activeTimelineId === 'likes'}
          >
            Likes
          </SidebarLink>
          <SidebarLink
            to="/stream"
            isPlaying={activeTimelineId === 'stream'}
          >
            Stream
          </SidebarLink>
        </Section>
        <Section>
          <Label>Playlists</Label>
          {playlists.map(({ title, id }) => (
            <SidebarLink
              key={`playlist-${id}`}
              isPlaying={activeTimelineId === `playlist::${id}`}
              to={`/playlist/${id}`}
            >
              {title}
            </SidebarLink>
          ))}
        </Section>
        <NewPlaylist
          onClick={addPlaylist}
        >
          Add Playlist
        </NewPlaylist>
      </SidebarWrapper>
    );
  }
}

export default (Sidebar);
