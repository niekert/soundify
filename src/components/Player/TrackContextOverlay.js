import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import * as Vibrant from 'node-vibrant';
import Overlay from 'components/styles/Overlay';

const Wrapper = styled(Overlay)`
  background: ${prop('color')};
`;

class TrackContextOverlay extends PureComponent {
  static propTypes = {
    artworkUrl: string.isRequired,
  };

  state = {
    activeColor: null,
  };

  componentDidMount() {
    this._updateColor(this.props.artworkUrl);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.artworkUrl !== this.props.artworkUrl) {
      this._updateColor(nextProps.artworkUrl);
    }
  }

  _updateColor(artworkUrl) {
    Vibrant.from(artworkUrl).getPalette().then(palette => {
      const [r, g, b] = palette.LightVibrant.getRgb();
      this.setState({
        activeColor: `rgba(${r}, ${g}, ${b}, 0.15)`,
      });
    });
  }

  render() {
    return <Wrapper color={this.state.activeColor} />;
  }
}

export default TrackContextOverlay;
