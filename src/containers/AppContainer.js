import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAuthedUser } from 'actions/authActions';
import App from 'components/App';

class AppContainer extends Component {
  static propTypes = {
    fetchAuthedUser: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  static defaultProps = {
    user: null,
  }

  componentDidMount() {
    this.props.fetchAuthedUser();
  }

  render() {
    return <App user={this.props.user} />;
  }
}

export default connect(state => ({ user: state.auth.user }), {
  fetchAuthedUser,
})(AppContainer);
