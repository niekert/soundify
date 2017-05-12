import 'react';
import PropTypes from 'prop-types';
import { STATUS_INITIAL, PENDING, OK, ERROR } from 'app-constants';

export const status = PropTypes.oneOf([STATUS_INITIAL, PENDING, OK, ERROR]);
