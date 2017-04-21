import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from 'components/icons/Arrow';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Username = styled.span`
  margin-left: 10px;
  font-weight: 300;
  font-size: 12px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 32px;
  align-self: center;
`;

const Button = styled.button`
  cursor: pointer;
  background: none;
`;

const Arrow = styled(ArrowIcon)`
  margin-left: 1em;
  position: relative;
  top: 1px;
  width: 10px;
  height: 10px;
  transform: rotate(90deg);
`;

class UserDropdown extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  state = {
    isOpen: false,
  }

  render () {
    const { user } = this.props;
    return (
      <Wrapper>
        <Avatar src={user.avatar_url} />
        <Button>
          <Username>{user.username}</Username>
          <Arrow open={this.state.isOpen} />
        </Button>
      </Wrapper>
    );
  }
}

export default UserDropdown;
