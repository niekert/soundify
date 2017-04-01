import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarWrapper = styled.div`
  min-width: 200px;
  padding: 15px 15px 100px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  background: ${props => props.theme.colors.secondaryBackground};
  z-index: 1;
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
  color: ${props => props.theme.colors.secondaryText};
  text-decoration: none;
  outline: none;
  padding: 10px 0;
  font-weight: 300;

  &.${props => props.activeClassName} {
    color: ${props => props.theme.colors.primaryText}
  }

  &.${props => props.activeClassName}:before {
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
