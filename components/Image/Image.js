import { bool, number } from 'prop-types';
import React, { PureComponent } from 'react';
import { Image as ImageNative, View } from 'react-native';

import Activity from '../Activity';
import styles from './Image.style';
import resizeWithAkamai from './modules/resizeWithAkamai';

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

    if (responsive && uri) uri = resizeWithAkamai({ uri, ratio });

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

export default Image;
