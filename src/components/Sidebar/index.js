import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import SidebarLink from './SidebarLink';

const SidebarWrapper = styled.div`
  width: 200px;
  grid-row: 1 / 3;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${prop('theme.colors.secondaryBackground')};
  z-index: 1;
`;

const Label = styled.label`
  display: block;
  font-weight: 300;
  color: ${prop('theme.colors.secondaryText')};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Section = styled.div`
  flex-basis: 33%;
`;

class Sidebar extends PureComponent {
  static propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.object),
    activeTimelineId: PropTypes.string,
  };

  static defaultProps = {
    playlists: [],
  }

  render() {
    const {
      playlists,
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
      </SidebarWrapper>
    );
  }
}

export default (Sidebar);
