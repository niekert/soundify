import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { prop } from 'styled-tools';

const SidebarWrapper = styled.div`
  min-width: 200px;
  padding: 15px 15px 100px;
  display: flex;
  height: 100vh;
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

const Link = styled(NavLink)`
  display: block;
  color: ${prop('theme.colors.secondaryText')};
  text-decoration: none;
  outline: none;
  padding: 10px 0;
  font-weight: 300;

  &:hover {
    color: ${prop('theme.colors.primaryText')};
  }

  &.${prop('activeClassName')} {
    color: ${prop('theme.colors.primaryText')};
  }

  &.${prop('activeClassName')}:before {
    content: '';
    position: absolute;
    left: 0px;
    height: 15px;
    background: ${props => props.theme.colors.active};
    width: 5px;
  }
`;
Link.defaultProps = {
  activeClassName: 'active',
};

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
          <Label>Your Music</Label>
          <Link to="/likes">Likes</Link>
        </Section>
        <Section>
          <Label>Playlists</Label>
          {playlists.map(({ title, id }) => (
            <Link key={`playlist-${id}`} to={`/playlist/${id}`}>{title}</Link>
          ))}
        </Section>
      </SidebarWrapper>
    );
  }
}

export default (Sidebar);
