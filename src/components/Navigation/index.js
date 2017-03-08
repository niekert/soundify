import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.div`

`

class Navigation extends PureComponent {
  render () {
    return (
      <Wrapper>
        <Logo />
        <div>Search component</div>
        <div>Profile nav</div>
      </Wrapper>
    );
  }
}

export default Navigation;
