import React, { PureComponent } from 'react';
import { Image as ImageNative, StyleSheet, View } from 'react-native';

import Activity from '../Activity';
import styles from './Image.style';

class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ready: false };
    this._onLoad = this._onLoad.bind(this);
  }

  _onLoad(event) {
    const { props: { ...inherit } } = this;

    this.setState({ ready: true });
    if (inherit.onLoad) inherit.onLoad(event);
  }

  render() {
    const {
      _onLoad,
      props: { ...inherit },
      state: { ready },
    } = this;

    return (
      <View style={StyleSheet.flatten([styles.container, inherit.style])}>
        <ImageNative {...inherit} onLoad={_onLoad} />
        { !ready && <Activity color="white" size={inherit.size || 'large'} style={styles.activity} /> }
      </View>
    );
  }
}

Image.propTypes = {};

Image.defaultProps = {};

export default Image;
