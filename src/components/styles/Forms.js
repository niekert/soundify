import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { lighten } from 'utils/color';

export const TextBox = styled.input.attrs({
  type: 'text',
})`
  padding: 10px;
  border: none;
  border-radius: 2px;
  color: #333;
  width: ${ifProp('fullWidth', '100%', 'auto')};
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 0.5em;
`;

export const Button = styled.button`
  min-width: 75px;
  height: 30px;
  padding: 5px 15px;
  border-radius: 3px;
  cursor: pointer;
  background: none;

  ${ifProp('cta', css`
    background: ${prop('theme.colors.cta')};
    color: ${prop('theme.colors.primaryText')};

    &:hover,
    &:focus {
      background: ${props => lighten(props.theme.colors.cta, 0.1)};
    }
  `)}

  ${ifProp('cancel', css`
    border: 1px solid ${prop('theme.colors.secondaryText')};
    color: ${prop('theme.colors.secondaryText')};

    &:hover,
    &:focus {
      border: 1px solid ${props => lighten(props.theme.colors.secondaryText, 0.2)};
      color: ${props => lighten(props.theme.colors.secondaryText, 0.2)};
    }
  `)};
`;

export const ButtonGroup = styled.div`
  ${ifProp('horizontal', css`
    margin-left: -5px;
    margin-right: -5px;

    & > * {
      margin-left: 5px;
      margin-right: 5px;
    }
  `)};
`;
