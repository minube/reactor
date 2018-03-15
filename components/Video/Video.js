import { array, bool, func, number, oneOfType, string } from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Platform, View } from 'react-native';

import Activity from '../Activity';
import { embedUrl } from './modules';
import styles from './Video.style';

const isWeb = Platform.OS === 'web';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false };
    this._onLoad = this._onLoad.bind(this);
  }

  shouldComponentUpdate({ autoPlay, source }, { ready }) {
    const { el = {} } = this;

    if (el.play && el.pause) el[autoPlay ? 'play' : 'pause']();
    return (source !== this.props.source || ready !== this.state.ready);
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
      state: { ready },
    } = this;
    const embed = embedUrl(this.props.source);

    return (
      <View style={StyleSheet.flatten([styles.container, !ready && styles.loading, style])}>
        { !ready && <Activity size="large" style={styles.activity} /> }

        { isWeb && !embed &&
          <video
            {...inherit}
            ref={(el) => { this.el = el; }}
            autoPlay={autoPlay}
            controls={controls ? 'true' : undefined}
            onLoadedData={_onLoad}
            preload="true"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src={source} />
            <track kind="captions" />
          </video> }

        { isWeb && embed &&
          <iframe
            allowFullScreen
            key={embed}
            frameBorder={0}
            onLoad={_onLoad}
            width="100%"
            height="100%"
            src={`${embed}&autoplay=${autoPlay ? 1 : 0}`}
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
  controls: false,
  onLoad() {},
  style: [],
};

export default Video;
