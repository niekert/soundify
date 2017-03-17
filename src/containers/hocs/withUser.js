import React, { PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const withUser = (ComposedComponent) => {
  const EnhanceUser = ({ user, ...props }) => {
    if (!user) {
      return <Redirect to="/" />;
    }

    return <ComposedComponent user={user} {...props} />;
  };
  EnhanceUser.propTypes = {
    user: PropTypes.object,
  };
  EnhanceUser.defaultProps = {
    user: null
  };

  const mapStateToProps = state => ({ user: state.auth.user }); // TODO: Selector
  return connect(mapStateToProps)(EnhanceUser);
};

export default withUser;

