import Color from 'color';
import { memoize } from 'lodash';

export const darken = memoize((color, darkenValue) =>
  Color(color).darken(darkenValue).hex(),
  (color, darkenValue) => `${color}::${darkenValue}`,
);

export const lighten = memoize((color, lightenValue) =>
  Color(color).lighten(lightenValue).hex(),
  (color, lightenValue) => `${color}::${lightenValue}`,
);

export const alpha = memoize((color, alphaValue) =>
  Color(color).alpha(alphaValue).string(),
  (color, alphaValue) => `${color}::${alphaValue}`,
);
