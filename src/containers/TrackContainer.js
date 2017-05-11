import React, { Component } from 'react';
import { object } from 'prop-types';

class TrackContainer extends Component {
  static propTypes = {
    match: object.isRequired, // React router match
  };

  componentDidMount() {
    // TODO: Fetch details of a track if needed
  }

  render() {
    return <div>Hello I'm a track</div>;
  }
}

export default TrackContainer;
