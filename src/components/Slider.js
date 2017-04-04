import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { compose, withState, withHandlers } from 'recompose';
import { prop, ifProp } from 'styled-tools';

const Bar = styled.div`
  flex: 1;
  height: 5px;
  position: relative;
  border-radius: 5px;
  background: ${prop('theme.colors.secondaryActive')};
`;

const Active = styled.div`
  will-change: width;
  position: relative;
  height: 100%;
  border-radius: 5px;
  width: ${prop('percentage', 0)}%;
  background: ${ifProp(
    'highlight',
    prop('theme.colors.active'),
    prop('theme.colors.secondaryText'),
  )}
`;

const Seek = styled.input`
  position: absolute;
  top: -10px;
  height: 20px;
  width: 100%;
  opacity: 0;
`;

const Scrubber = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  background: ${prop('theme.colors.primaryText')};
`;

const enhance = compose(
  withState('hoverActive', 'setHoverState', false),
  withHandlers({
    mouseEnter: ({ setHoverState }) => () => setHoverState(true),
    mouseLeave: ({ setHoverState }) => () => setHoverState(false),
  }),
);

const Slider = enhance(({
  onChange,
  percentage = 0,
  hoverActive,
  mouseEnter,
  mouseLeave,
}) => (
  <Bar>
    <Active
      percentage={percentage}
      highlight={hoverActive}
    >
      {hoverActive && <Scrubber />}
    </Active>
    <Seek
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      type="range"
      onChange={onChange}
    />
  </Bar>
));
Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  percentage: PropTypes.number,
};

export default Slider;
