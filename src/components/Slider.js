import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lighten, alpha } from 'utils/color';
import { compose, withState, withHandlers } from 'recompose';
import { prop, ifProp } from 'styled-tools';

const Bar = styled.div`
  flex: 1;
  position: relative;
`;

const seekLine = css`
  -webkit-appearance: none;
  position: absolute;
  background: none;
  width: 100%;
  margin: 0;
`;

const Seek = styled.input`
  ${seekLine}
  top: -10px;
  height: 20px;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: none;
    opacity: ${ifProp('highlight', 1, 0)};
    z-index: 30;
    width: 10px;
    height: 10px;
    background: ${prop('theme.colors.primaryText')};
    border-radius: 50%;
    position: relative;
  }
`;

const Progress = styled.progress`
  ${seekLine}
  top: -3px;
  pointer-events: none;
  height: 6px;
  z-index: 20;

  &::-webkit-progress-value {
    -webkit-appearance: none;
    background: ${props => (props.active ? props.theme.colors.active : alpha(props.theme.colors.primaryText, 0.7))};
    height: 6px;
    border-radius: 6px;
    z-index: 50;
  }

  &::-webkit-progress-bar {
    border-radius: 6px;
    background: ${props => lighten(props.theme.colors.secondaryActive, 0.3)};
    border-radius: 5px;
    height: 6px;
  }
`;

const enhance = compose(
  withState('hoverActive', 'setHoverState', false),
  withHandlers({
    mouseEnter: ({ setHoverState }) => () => setHoverState(true),
    mouseLeave: ({ setHoverState }) => () => setHoverState(false),
  }),
);

const Slider = enhance(
  ({ onChange, percentage = 0, hoverActive, mouseEnter, mouseLeave }) => (
    <Bar>
      <Seek
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        highlight={hoverActive}
        type="range"
        value={percentage}
        onChange={onChange}
      />
      <Progress value={percentage} max={100} active={hoverActive} />
    </Bar>
  ),
);
Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  percentage: PropTypes.number,
};

export default Slider;
