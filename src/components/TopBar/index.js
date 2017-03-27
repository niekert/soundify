import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import LoginContainer from 'containers/LoginContainer';
import Searchbar from './Searchbar';
import UserDropdown from './UserDropdown';
import NavLink from './NavLink';
import SoundCloudLogo from './SoundCloudLogo';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: ${props => props.theme.colors.secondaryBackground}
  display: flex;
  height: 50px;
  padding: 0 25px;
  justify-content: flex-start;
  width: 100%;
  box-shadow: 0 2px 7px 7px rgba(0, 0, 0, .1);
`;

const Logo = styled(SoundCloudLogo)`
  fill: #fff;
  height: 100%;
  width: 50px;
  align-self: center;
`;

const Right = styled.div`
  margin-left: auto;
  display: flex;
  align-items: flex-end;
`;

class TopBar extends PureComponent {
  static propTypes = {
    user: PropTypes.object
  };

  render () {
    const { user } = this.props.auth;

    return (
      <Wrapper>
        <Logo />
        <Searchbar type="text" />
        <Right>
          {user ?
            <UserDropdown user={user} /> :
            <LoginContainer />
          }
        </Right>
      </Wrapper>
    );
  }
}

export default TopBar;
