import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import withUser from 'containers/hocs/withUser';
import LoginPage from 'components/Login';
import { attemptAuth, authCallback } from '../actions/authActions';

class LoginContainer extends PureComponent {
  static propTypes = {
    attemptAuth: PropTypes.func.isRequired,
    authCallback: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    window.removeEventListener('message', this._onAuthMessageReceived);
  }

  _onLoginClicked = e => {
    window.addEventListener('message', this._onAuthMessageReceived, false);
    this.props.attemptAuth();
  };

  _onAuthMessageReceived = ({ data }) => {
    if (data.type === 'SCConnect') {
      // The SC SDK needs to auth with a location object
      const location = JSON.parse(data.location);
      this.props.authCallback(location);
    }
  };

  render() {
    return (
      <LoginPage
        onLoginClicked={this._onLoginClicked}
      />
    );
  }
}

export default connect(null, {
  attemptAuth,
  authCallback,
})(LoginContainer);
