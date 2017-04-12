import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    track: PropTypes.object,
    toggleLike: PropTypes.func.isRequired,
    ...Controls.propTypes,
  };

  static defaultProps = {
    track: null,
  };

  render() {
    const {
      track,
      toggleLike,
    } = this.props;

    return (
      <Wrapper>
        <CurrentTrack track={track} toggleLike={toggleLike} />
        <Controls {...this.props} />
      </Wrapper>
    );
  }
}

export default PlayerContent;
