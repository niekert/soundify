import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initAuth } from 'actions/authActions';
import App from 'components/App';

class AppContainer extends Component {
  componentDidMount () {
    this.props.onInit();
  }

  render() {
    return <App />
  }
}

function mapStateToProps (state) {
  return {
    status: state.status
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  console.log('ownProps is', ownProps);

  return {
    onInit: () => dispatch(initAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
