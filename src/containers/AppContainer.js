import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initAuth } from 'actions/authActions';
import { STATUS_DONE } from 'constants';
import App from 'components/App';

class AppContainer extends Component {
  componentDidMount () {
    this.props.onInit();
  }

  render() {
    if (STATUS_DONE.includes(this.props.status)) {
      return <App />
    }

    return (
      <div>.... Loading....</div>
    );
  }
}

function mapStateToProps (state) {
  return {
    status: state.auth.status
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onInit: () => dispatch(initAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
