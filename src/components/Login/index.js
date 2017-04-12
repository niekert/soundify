import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PENDING } from 'constants';
import Loader from 'components/Loader';
import { prop } from 'styled-tools';
import styled from 'styled-components';
import LoginButton from './LoginButton';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${prop('theme.colors.primaryBackground')};
  color: ${prop('theme.colors.primaryText')};
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
          <div>
            <LoginButton onLoginClicked={this.props.onLoginClicked} />
          </div>
        }
      </Wrapper>
    );
  }
}

export default Login;
