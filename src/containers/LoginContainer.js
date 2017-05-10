import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginPage from 'components/Login';
import { attemptAuth, authCallback } from '../actions/authActions';

class LoginContainer extends PureComponent {
  static propTypes = {
    status: PropTypes.string.isRequired,
    attemptAuth: PropTypes.func.isRequired,
    authCallback: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    window.removeEventListener('message', this._onAuthMessageReceived);
  }

  _onLoginClicked = (e) => {
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
        status={this.props.status}
        onLoginClicked={this._onLoginClicked}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  status: auth.status,
});

export default connect(mapStateToProps, {
  attemptAuth,
  authCallback,
})(LoginContainer);
