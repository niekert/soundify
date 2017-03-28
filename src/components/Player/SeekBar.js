import React, { PropTypes, PureComponent } from 'react';
import { formatSeconds } from 'helpers/format';
import styled from 'styled-components';

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
  border-radius: 5px;
  background: ${props => props.theme.colors.secondaryActive};
  overflow: hidden;
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
  height: 100%;
  width: ${props => props.percentage || 0}%;
  background: ${props => props.theme.colors.primaryText};
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

  render() {
    const {
      totalSeconds,
      playedSeconds,
      isPlaying,
    } = this.props;
    const percentage = playedSeconds > 0
       ? Number((playedSeconds / totalSeconds) * 100).toFixed(2) :
       0;

    return (
      <Wrapper>
        <CurrentTime>{formatSeconds(playedSeconds)}</CurrentTime>
        <Bar>
          <Active percentage={percentage} />
        </Bar>
        <Time>{formatSeconds(totalSeconds)}</Time>
      </Wrapper>
    );
  }
}

export default SeekBar;
