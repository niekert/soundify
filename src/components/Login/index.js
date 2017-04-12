import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PENDING } from 'constants';
import Loader from 'components/Loader';
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

const LoginContainer = styled.div`
`

const SubTitle = styled.h2`
  margin-top: 10px;
  font-size: 14px;
`;

class Login extends PureComponent {
  static propTypes = {
    status: PropTypes.string.isRequired,
    onLoginClicked: PropTypes.func.isRequired,
  };

  render() {
    const { status } = this.props;
    return (
      <Wrapper>
        {status === PENDING ?
          <Loader /> :
          <LoginContainer>
            <LoginButton onLoginClicked={this.props.onLoginClicked} />
          </LoginContainer>
        }
      </Wrapper>
    );
  }
}

export default Login;
