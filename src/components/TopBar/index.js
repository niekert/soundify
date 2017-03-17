import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import UserDropdown from './UserDropdown';
import LoginContainer from 'containers/LoginContainer';
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
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 2px 7px 7px rgba(0, 0, 0, .1);
`;

const Logo = styled(SoundCloudLogo)`
  fill: #fff;
  height: 100%;
  width: 50px;
  align-self: center;
`;

const Title = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 22px;
  padding-left: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  align-items: flex-end;
`;

class TopBar extends PureComponent {
  static propTypes = {
    user: PropTypes.object
  };

  render () {
    const { user } = this.props.auth;
    console.log('props is', this.props);

    return (
      <Wrapper>
        <Logo />
        <Title>SoundCloud</Title>
        <LinksContainer>
          <NavLink
            to="/stream"
          >
            Stream
          </NavLink>
          <NavLink
            to="/likes"
          >
            My Likes
          </NavLink>
        </LinksContainer>
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
