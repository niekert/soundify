import React, { PropTypes, PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const withAuth = ComposedComponent => {
  class WithAuth extends PureComponent {
    static propTypes = {
      user: PropTypes.object
    };

    render () {
      if (!this.props.user) {
        return <Redirect to="/login" />;
      }

      return <ComposedComponent />
    }
  }

  function mapStateToProps(state) {
    return state.auth;
  }

  return connect(mapStateToProps)(WithAuth);
}

export default withAuth;

