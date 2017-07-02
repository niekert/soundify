import 'react';
import PropTypes from 'prop-types';
import { INITIAL, PENDING, OK, ERROR } from 'app-constants';

export const status = PropTypes.oneOf([INITIAL, PENDING, OK, ERROR]);
