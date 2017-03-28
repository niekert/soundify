import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import LoginButton from './LoginButton';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${props => props.theme.colors.primaryBackground}
  color: ${props => props.theme.colors.primaryText}
`;

const SubTitle = styled.h2`
  margin-top: 10px;
  font-size: 14px;
`;

class Login extends PureComponent {
  static propTypes = {
    onLoginClicked: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Wrapper>
        <LoginButton onLoginClicked={this.props.onLoginClicked} />
        <SubTitle>Super safe and stuff</SubTitle>
      </Wrapper>
    );
  }
}

export default Login;
