import React, { Component, PropTypes } from 'react';
import NavButton from './NavButton';

class LoginButton extends Component {
  static propTypes = {
    onLoginClicked: PropTypes.func.isRequired,
  };

  render() {
    return (
      <NavButton
        onClick={this.props.onLoginClicked}
      >
        Connect to SoundCloud
      </NavButton>
    );
  }
}

export default LoginButton;
