import React from 'react';
import { func } from 'prop-types';
import { logout } from 'actions/authActions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class LogoutContainer extends React.Component {
  static propTypes = {
    logout: func.isRequired,
  };

  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default connect(null, { logout })(LogoutContainer);
