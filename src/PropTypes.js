
import { PropTypes } from 'react';
import {
  STATUS_INITIAl,
  STATUS_PENDING,
  STATUS_OK,
  STATUS_ERROR
} from 'constants';

export const status = PropTypes.oneOf([
  STATUS_INITIAl,
  STATUS_PENDING,
  STATUS_OK,
  STATUS_ERROR
]);
