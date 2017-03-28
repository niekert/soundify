import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import LoginContainer from 'containers/LoginContainer';
import SearchbarContainer from 'containers/SearchbarContainer';
import UserDropdown from './UserDropdown';
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
    user: PropTypes.object,
  };

  static defaultProps = {
    user: null,
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Wrapper>
        <Logo />
        <SearchbarContainer />
        <Right>
          {user && <UserDropdown user={user} />}
        </Right>
      </Wrapper>
    );
  }
}

export default TopBar;
