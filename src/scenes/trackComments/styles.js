import styled from 'styled-components';
import { prop } from 'styled-tools';

export const Wrapper = styled.div`
  margin: 0 ${prop('theme.spacing.space2')};
  padding: ${prop('theme.spacing.space1')} 0;
  height: auto;
  display: flex;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: ${prop('theme.spacing.space1')};
  flex-shrink: 0;
`;
