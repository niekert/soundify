import styled from 'styled-components';
import { prop } from 'styled-tools';

export const H1 = styled.h1`
  font-size: ${prop('theme.fontSize.displayLarge')};
  line-height: ${prop('theme.lineHeights.displayMedium')};
`;

export const H2 = styled.h2`
  font-size: ${prop('theme.fontSize.heading')};
  line-height: ${prop('theme.lineHeights.heading')};
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: .5em;
`;
