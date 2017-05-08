import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PENDING } from 'app-constants';
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

const Subtitle = styled.span`
  margin-top: 10px;
  display: block;
  line-height: 1.3;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  font-weight: 300;
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
          <Loader light /> :
          <div>
            <LoginButton onLoginClicked={this.props.onLoginClicked} />
            <Subtitle>
              You are required to connect your SoundCloud account  <br />
              for the best Soundify experience (for now)
            </Subtitle>
          </div>
        }
      </Wrapper>
    );
  }
}

export default Login;
