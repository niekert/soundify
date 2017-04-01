
import { PropTypes } from 'react';
import {
  STATUS_INITIAl,
  PENDING,
  OK,
  ERROR
} from 'constants';

export const status = PropTypes.oneOf([
  STATUS_INITIAl,
  PENDING,
  OK,
  ERROR
]);
