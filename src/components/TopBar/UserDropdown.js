import React, { PureComponent, PropTypes } from 'react';
import DropdownButton from 'components/DropdownButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Username = styled.span`
  margin-left: 10px;
  color: ${props => props.theme.colors.primaryText};
  font-weight: 300;
  font-size: 12px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 32px;
  align-self: center;
`;

const Button = styled(DropdownButton)`
  margin-left: 15px;
`;

class UserDropdown extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render () {
    const { user } = this.props;
    console.log('user is', user);
    return (
      <Wrapper>
        <Avatar src={user.avatar_url} />
        <Username>{user.username}</Username>
        <Button />
      </Wrapper>
    );
  }
}

export default UserDropdown;
