import { bool, number } from 'prop-types';
import React, { PureComponent } from 'react';
import { Image as ImageNative, View } from 'react-native';

import { ENV, LAYOUT } from '../../common';
import Activity from '../Activity';
import styles from './Image.style';

const AKAMAI_DOMAIN = 'imgs-akamai.mnstatic.com';
const { IS_SERVER } = ENV;
const ImageServer = IS_SERVER ? require('./Image.server').default : undefined;

class Image extends PureComponent {
  static propTypes = {
    ratio: number,
    responsive: bool,
  };

  static defaultProps = {
    ratio: 1,
    responsive: false,
  };

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
      IS_SERVER
        ? <ImageServer uri={uri} {...inherit} />
        : (
          <View style={[styles.container, inherit.style]}>
            <ImageNative
              {...inherit}
              source={uri ? { uri } : undefined}
              onLoad={_onLoad}
            />
            { !ready && <Activity color="white" size={inherit.size || 'large'} style={styles.activity} /> }
          </View>)
    );
  }
}

export default Image;
