import React from 'react';
import { string } from 'prop-types';
import moment from 'moment';

function TimeAgo({ timestamp }) {
  // TODO: no hacky split
  return (
    <time title={timestamp}>
      {moment(timestamp.split(/ \+/)[0]).fromNow()}
    </time>
  );
}

TimeAgo.propTypes = {
  timestamp: string.isRequired,
};

export default TimeAgo;
