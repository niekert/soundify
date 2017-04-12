import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Searchbar from 'components/TopBar/Searchbar';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import SoundCloudLogo from './SoundCloudLogo';

const Wrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  z-index: 999;
  background: ${props => props.theme.colors.secondaryBackground};
  display: flex;
  height: 50px;
  padding: 0 25px;
  justify-content: flex-start;
  box-shadow: 0 2px 7px rgba(0, 0, 0, .1);
  -webkit-app-region: drag;
`;

const Logo = styled(SoundCloudLogo)`
  fill: #fff;
  color: #fff;
  cursor: pointer;
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
    const { user } = this.props;

    return (
      <Wrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Searchbar />
        <Right>
          {user && <UserDropdown user={user} />}
        </Right>
      </Wrapper>
    );
  }
}

export default TopBar;
