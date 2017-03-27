import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import NavLink from 'components/TopBar/NavLink';

const SidebarWrapper = styled.div`
  min-width: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${props => props.theme.colors.primaryBackground};
`;

const Label = styled.label`
  display: block;
  font-weight: 300;
  color: ${props => props.theme.colors.secondaryText};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Link = styled(NavLink)`
  display: block;
  padding: 10px 0;
  font-weight: 300;
`;

const Section = styled.div`
  flex-basis: 33%;
`;

class Sidebar extends PureComponent {
  static propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    playlists: [],
  }

  render() {
    const { playlists } = this.props;
    return (
      <SidebarWrapper>
        <Section>
          <Label>My Music</Label>
          <Link to="/s/likes">Likes</Link>
        </Section>
        <Section>
          <Label>Playlists</Label>
          {playlists.map(({ title, id }) => (
            <Link key={`playlist-${id}`} to={`/s/playlist/${id}`}>{title}</Link>
          ))}
        </Section>
      </SidebarWrapper>
    );
  }
}

export default (Sidebar);
