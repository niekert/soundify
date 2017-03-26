import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import NavLink from 'components/TopBar/NavLink';

const SidebarWrapper = styled.div`
  min-width: 200px;
  padding: 15px;
  background: ${props => props.theme.colors.primaryBackground};
`;

const Label = styled.label`
  display: block;
  font-weight: 300;
  color: ${props => props.theme.colors.secondaryText};
  text-transform: uppercase;
`;

const Link = styled(NavLink)`
  display: block;
  padding: 10px 0;
  font-weight: 300;
`;

class Sidebar extends PureComponent {
  static propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    playlists: [],
  }

  render() {
    const { playlists } = this.props;
    return (
      <SidebarWrapper>
        <Label>Playlists</Label>
        <Link to="/playlist/likes">Likes</Link>
        {playlists.map(({ title, id }) => (
          <Link to={`/playlist/${id}`}>{title}</Link>
        ))}
      </SidebarWrapper>
    );
  }
}

export default (Sidebar);
