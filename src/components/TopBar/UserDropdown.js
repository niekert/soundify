import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 32px;
  align-self: center;
`;

class UserDropdown extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render () {
    const { user } = this.props;

    return (
      <Wrapper>
        <Avatar src={user.avatar_url} />
      </Wrapper>
    );
  }
}

export default UserDropdown;
