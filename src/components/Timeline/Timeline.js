import React, { PureComponent, PropTypes } from 'react';

class Timeline extends PureComponent {
  static propTypes = {
    tracks: PropTypes.array, // required
  };

  render () {
    return (
      <div>
        This is timeline
      </div>
    );
  }
}

export default Timeline;
