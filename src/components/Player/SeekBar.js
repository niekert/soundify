import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { formatSeconds } from 'helpers/format';
import styled from 'styled-components';
import Slider from 'components/Slider';
import { prop } from 'styled-tools';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Time = styled.span`
  font-size: 10px;
  color: ${prop('theme.colors.secondaryText')};
  padding: 0 10px;
  width: 50px;
`;

const CurrentTime = styled(Time)`
  text-align: right;
`;

class SeekBar extends PureComponent {
  static propTypes = {
    totalSeconds: PropTypes.number,
    isPlaying: PropTypes.bool, // eslint-disable-line
    playedSeconds: PropTypes.number,
    isActive: PropTypes.bool,
    onSeek: PropTypes.func.isRequired, // eslint-disable-line
  };

  static defaultProps = {
    totalSeconds: 0,
    playedSeconds: 0,
    isPlaying: false,
    isActive: false,
  };

  state = {
    hoverActive: false,
  }

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
      isActive,
    } = this.props;

    const percentage = playedSeconds > 0
       ? Number(Number((playedSeconds / totalSeconds) * 100).toFixed(2)) : // todo: clarify lol
       0;

    return (
      <Wrapper>
        {isActive &&
          <CurrentTime>{formatSeconds(playedSeconds)}</CurrentTime>
        }
        <Slider percentage={percentage} onChange={this._onSeekChange} />
        {isActive &&
          <Time>-{formatSeconds(totalSeconds - playedSeconds)}</Time>
        }
      </Wrapper>
    );
  }
}

export default SeekBar;
