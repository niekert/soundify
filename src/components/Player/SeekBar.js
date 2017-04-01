import React, { PropTypes, PureComponent } from 'react';
import { debounce } from 'lodash';
import { formatSeconds } from 'helpers/format';
import styled from 'styled-components';
import { prop, ifProp } from 'styled-tools';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const Bar = styled.div`
  flex: 1;
  height: 8px;
  position: relative;
  border-radius: 5px;
  background: ${prop('theme.colors.secondaryActive')};
`;

const Time = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.secondaryText};
  padding: 0 5px;
  width: 50px;
`;

const CurrentTime = styled(Time)`
  text-align: right;
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
    prop('theme.colors.primaryText'),
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
  width: 15px;
  position: absolute;
  right: -5px;
  bottom: -4px;
  height: 15px;
  border-radius: 50%;
  background: ${prop('theme.colors.primaryText')};
`;

class SeekBar extends PureComponent {
  static propTypes = {
    totalSeconds: PropTypes.number,
    isPlaying: PropTypes.bool, // eslint-disable-line
    playedSeconds: PropTypes.number,
    onSeek: PropTypes.func.isRequired, // eslint-disable-line
  };

  static defaultProps = {
    totalSeconds: 0,
    playedSeconds: 0,
    isPlaying: false,
  };

  state = {
    hoverActive: false,
  }

  _mouseEnter = () => this.setState({ hoverActive: true });
  _mouseLeave = () => this.setState({ hoverActive: false });

  _onSeekChange = (e) => {
    const { totalSeconds, onSeek } = this.props;
    const seekPercentage = e.target.value;
    const nextSeconds = Math.round(totalSeconds * (seekPercentage / 100));

    onSeek(nextSeconds);
  }; // TODO: throttle with mouseup

  render() {
    const {
      totalSeconds,
      playedSeconds,
    } = this.props;

    const percentage = playedSeconds > 0
       ? Number((playedSeconds / totalSeconds) * 100).toFixed(2) :
       0;

    return (
      <Wrapper>
        <CurrentTime>{formatSeconds(playedSeconds)}</CurrentTime>
        <Bar>
          <Active
            percentage={percentage}
            highlight={this.state.hoverActive}
          >
            {this.state.hoverActive && <Scrubber />}
          </Active>
          <Seek
            onMouseEnter={this._mouseEnter}
            onMouseLeave={this._mouseLeave}
            type="range"
            onChange={this._onSeekChange}
          />
        </Bar>
        <Time>{formatSeconds(totalSeconds)}</Time>
      </Wrapper>
    );
  }
}

export default SeekBar;
