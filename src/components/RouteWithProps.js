import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';

const RoutewithProps = ({ props, component: Component, ...rest }) => (
  <Route render={() => <Component {...props} />} {...rest} />
);
RoutewithProps.propTypes = {
  component: PropTypes.element.isRequired,
  props: PropTypes.object,
};
RoutewithProps.defaultProps = {
  props: {},
};

export default RoutewithProps;
