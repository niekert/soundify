import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAuthedUser } from 'actions/authActions';
import App from 'components/App';

class AppContainer extends Component {
  static propTypes = {
    fetchAuthedUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchAuthedUser();
  }

  render() {
    return <App />;
  }
}

export default connect(null, {
  fetchAuthedUser,
})(AppContainer);
