import styled from 'styled-components';

export default styled.button`
  background: none;
  border_bottom: none;
  line-height: 44px;
  font-size: 14px;
  cursor: pointer;
  color: ${props => props.theme.colors.secondaryText};

  &:hover {
    color: ${props => props.theme.colors.primaryText};
    line-height:43px;
    border-bottom: 1px solid ${props => props.theme.colors.active};
  }
`
