import { bool, number } from 'prop-types';
import React, { PureComponent } from 'react';
import { Image as ImageNative, View } from 'react-native';

import { LAYOUT } from '../../common';
import Activity from '../Activity';
import styles from './Image.style';

const AKAMAI_DOMAIN = 'imgs-akamai.mnstatic.com';

class Image extends PureComponent {
  state = {
    ready: false,
  }

  _onLoad = (event) => {
    const { props: { ...inherit } } = this;

    this.setState({ ready: true });
    if (inherit.onLoad) inherit.onLoad(event);
  }

  render() {
    const {
      _onLoad,
      props: { ratio, responsive, ...inherit },
      state: { ready },
    } = this;
    let { source: { uri } = {} } = inherit;

    if (responsive && uri && uri.includes(AKAMAI_DOMAIN)) {
      uri = `${uri}?fit=around|${LAYOUT.VIEWPORT.W / ratio}:${LAYOUT.VIEWPORT.H / ratio}`;
    }

    return (
      <View style={[styles.container, inherit.style]}>
        <ImageNative
          {...inherit}
          source={uri ? { uri } : undefined}
          onLoad={_onLoad}
        />
        { !ready && <Activity color="white" size={inherit.size || 'large'} style={styles.activity} /> }
      </View>
    );
  }
}

Image.propTypes = {
  ratio: number,
  responsive: bool,
};

Image.defaultProps = {
  ratio: 1,
  responsive: false,
};

export default Image;
