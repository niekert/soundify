import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import UserDropdown from './UserDropdown';
import LoginContainer from 'containers/LoginContainer';
import Link from 'components/Link';
import { STATUS_DONE } from 'constants';
import SoundCloudLogo from './SoundCloudLogo';

const Wrapper = styled.div`
  display: flex;
  height: 50px;
  padding: 0 25px;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.outline}
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

const NavLink = styled(Link)`
  padding: 0 15px;
`

const Right = styled.div`
  display: flex;
  align-items: flex-end;
`;

class TopBar extends PureComponent {
  static propTypes = {
    user: PropTypes.object
  };

  render () {
    const { user } = this.props;

    return (
      <Wrapper>
        <Logo />
        <Title>SoundCloud</Title>
        <LinksContainer>
          <NavLink to="/stream">Stream</NavLink>
          <NavLink to="/likes">My Likes</NavLink>
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
