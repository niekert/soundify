import React, { PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { STATUS_OK, STATUS_DONE } from 'constants';
import { connect } from 'react-redux';

const withUser = (ComposedComponent) => {
  const EnhanceUser = ({ user, status, ...props }) => {
    if (user && status === STATUS_OK) {
      return <ComposedComponent user={user} {...props} />;
    }

    if (STATUS_DONE.includes(status)) {
      return <Redirect to="/" />;
    }

    return null;
  };
  EnhanceUser.propTypes = {
    user: PropTypes.object,
  };
  EnhanceUser.defaultProps = {
    user: null,
  };

  const mapStateToProps = state => ({
    user: state.auth.user,
    status: state.auth.status,
   }); // TODO: Selector
  return connect(mapStateToProps)(EnhanceUser);
};

export default withUser;

