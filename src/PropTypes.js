import 'react';
import { STATUS_INITIAl, PENDING, OK, ERROR } from 'app-constants';

export const status = PropTypes.oneOf([STATUS_INITIAl, PENDING, OK, ERROR]);
