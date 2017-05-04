import Color from 'color';
import { memoize } from 'lodash';

const memoizeResolver = (color, value) => `${color}::${value}`;

export const darken = memoize((color, darkenValue) =>
  Color(color).darken(darkenValue).hex(),
  memoizeResolver,
);

export const lighten = memoize((color, lightenValue) =>
  Color(color).lighten(lightenValue).hex(),
  memoizeResolver,
);

export const alpha = memoize((color, alphaValue) =>
  Color(color).alpha(alphaValue).string(),
  memoizeResolver,
);
