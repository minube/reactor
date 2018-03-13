import { array, bool, func, number, oneOfType, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, Platform, View } from 'react-native';

import Activity from '../Activity';
import { embedUrl } from './modules';
import styles from './Video.style';

const isWeb = Platform.OS === 'web';

class Video extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { embed: embedUrl(this.props.source), ready: false };
    this._onLoad = this._onLoad.bind(this);
  }

  componentWillReceiveProps({ autoPlay, source }) {
    if (source !== this.props.source) this.setState({ embed: embedUrl(source) });
    if (this.el && this.el.play) this.el[autoPlay ? 'play' : 'pause']();
  }

  _onLoad() {
    const { props: { onLoad } } = this;

    this.setState({ ready: true });
    onLoad();
  }

  render() {
    const {
      _onLoad,
      props: {
        autoPlay, controls, source, style, ...inherit
      },
      state: { embed, ready },
    } = this;

    return (
      <View style={StyleSheet.flatten([styles.container, !ready && styles.loading, style])}>
        { !ready && <Activity size="large" style={styles.activity} /> }

        { isWeb && !embed &&
          <video
            {...inherit}
            autoPlay={autoPlay}
            controls={controls ? "true" : undefined}
            onLoadedData={_onLoad}
            preload="true"
            ref={el => this.el = el}
            src={source}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          /> }

        { isWeb && embed &&
          <iframe
            frameBorder={0}
            onLoad={_onLoad}
            width="100%"
            height="100%"
            src={`${embed}&autoplay${autoPlay ? '1' : '0'}`}
            title={embed}
          /> }
      </View>
    );
  }
}

Video.propTypes = {
  autoPlay: bool,
  controls: bool,
  onLoad: func,
  source: string.isRequired,
  style: oneOfType([array, number]),
};

Video.defaultProps = {
  autoPlay: false,
  controls: true,
  onLoad() {},
  style: [],
};

export default Video;
