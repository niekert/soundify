import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginButton from 'components/TopBar/LoginButton';
import { attemptAuth, authCallback } from '../actions/authActions';

class LoginContainer extends PureComponent {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onAuthCallback: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    window.removeEventListener('message', this._onAuthMessageReceived);
  }

  _onLoginClicked = e => {
    window.addEventListener('message', this._onAuthMessageReceived, false);
    this.props.onLogin();
  };

  _onAuthMessageReceived = ({ data }) => {
    if (data.type === 'SCConnect') {
      // The SC SDK needs to auth with a location object
      const location = JSON.parse(data.location);
      this.props.onAuthCallback(location);
    }
  };

  render() {
    return (
      <LoginButton onLoginClicked={this._onLoginClicked} />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLogin: () => dispatch(attemptAuth()),
  onAuthCallback: data => authCallback(data),
});

export default connect(null, mapDispatchToProps)(LoginContainer);
