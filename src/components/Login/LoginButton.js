import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoundcloudLogo from 'components/TopBar/SoundCloudLogo';
import styled from 'styled-components';

const Button = styled.button`
  background: #ff7700;
  color: white;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 16px;

  svg {
    color: white;
    height: 50px;
    width: 50px;
    margin-right: 15px;
  }
`;

class LoginButton extends Component {
  static propTypes = {
    onLoginClicked: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Button
        onClick={this.props.onLoginClicked}
      >
        <SoundcloudLogo />
        Connect to SoundCloud
      </Button>
    );
  }
}

export default LoginButton;
