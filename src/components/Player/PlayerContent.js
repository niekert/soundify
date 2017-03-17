import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import CurrentTrack from './CurrentTrack';
import Controls from './Controls';

const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  flex: 1;
  align-items: center;
`;

class PlayerContent extends PureComponent {
  static propTypes = {
    track: PropTypes.object.isRequired,
    ...Controls.propTypes,
  };

  render() {
    const { track } = this.props;

    return (
      <Wrapper>
        <CurrentTrack track={track} />
        <Controls {...this.props} />
      </Wrapper>
    );
  }
}

export default PlayerContent;
