import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { OK, DONE } from 'app-constants';
import { connect } from 'react-redux';

const withUser = (ComposedComponent, { redirect = true } = {}) => {
  const EnhanceUser = ({ user, status, ...props }) => {
    if (user && status === OK) {
      return <ComposedComponent user={user} {...props} />;
    }

    if (redirect && DONE.includes(status)) {
      return <Redirect to="/" />;
    }

    return null;
  };
  EnhanceUser.propTypes = {
    user: PropTypes.object,
    status: PropTypes.string,
  };
  EnhanceUser.defaultProps = {
    user: null,
    status: '',
  };

  const mapStateToProps = state => ({
    user: state.auth.user,
    status: state.auth.status,
  }); // TODO: Selector
  return connect(mapStateToProps)(EnhanceUser);
};

export default withUser;
