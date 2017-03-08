import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { attemptAuth, authCallback } from '../actions/authActions';
import SC from 'soundcloud';

class AuthContainer extends PureComponent {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  }

  componentWillUnmount() {
    window.removeEventListener('message', this._onAuthMessageReceived);
  }

  _onLoginClicked = e => {
    window.addEventListener('message', this._onAuthMessageReceived, false);
    this.props.onLogin();
  }

  _onAuthMessageReceived = ({ data }) => {
    if(data.type === 'SCConnect') {
      // The SC SDK needs to auth with a location object
      const location = JSON.parse(data.location);
      this.props.onAuthCallback(location);
    }
  }

  render () {
    return (
      <div>
        Ge moet oe aanmelde jonge
        <button onClick={this._onLoginClicked}>Log in to soundcloud</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state is', state);
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogin: () => dispatch(attemptAuth()),
    onAuthCallback: (data) => dispatch(authCallback(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
