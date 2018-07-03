import {
  bool, func, number, string,
} from 'prop-types';
import React, { Component } from 'react';
import { Platform, View } from 'react-native';

import Activity from '../Activity';
import { embedUrl, htmlVideo } from './modules';
import styles from './Video.style';

const isWeb = Platform.OS === 'web';
let WebView;
if (!isWeb) WebView = require('react-native').WebView; // eslint-disable-line

class Video extends Component {
  state = {
    ready: false,
  }

  shouldComponentUpdate({ autoPlay, source }, { ready }) {
    const { el = {}, props, state } = this;

    if (el.play && el.pause) el[autoPlay ? 'play' : 'pause']();
    return (source !== props.source || ready !== state.ready);
  }

  _onLoad = () => {
    const { props: { onLoad } } = this;

    this.setState({ ready: true });
    onLoad();
  }

  render() {
    const {
      _onLoad,
      props: {
        autoPlay, controls, height, onLoad, preload, source, width, ...inherit
      },
      state: { ready },
    } = this;
    const embed = embedUrl(source);
    const dimensions = {
      height, width, maxHeight: height, maxWidth: width,
    };

    return (
      <View
        pointerEvents={!controls && autoPlay ? 'none' : undefined}
        style={[styles.container, dimensions, !ready && styles.loading, inherit.style]}
      >
        { isWeb && !ready && <Activity size="large" style={styles.activity} /> }

        { isWeb && !embed
          && (
          <video
            {...inherit}
            ref={(el) => { this.el = el; }}
            autoPlay={autoPlay}
            controls={controls ? 'true' : undefined}
            onLoadedData={_onLoad}
            preload={preload ? 'auto' : 'none'}
            style={{ objectFit: 'cover', width, height }}
          >
            <source src={source} />
            <track kind="captions" />
          </video>
          ) }

        { isWeb && embed
          && (
          <iframe
            allowFullScreen
            key={embed}
            frameBorder={0}
            onLoad={_onLoad}
            width="100%"
            height="100%"
            src={`${embed}&autoplay=${autoPlay ? 1 : 0}`}
            title={embed}
          />
          ) }

        { !isWeb
          && (
          <WebView
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction={false}
            scalesPageToFit={false}
            scrollEnabled={false}
            onLoadStart={onLoad}
            source={{ html: htmlVideo(this.props) }}
            style={[styles.webView, dimensions]}
          />
          ) }
      </View>
    );
  }
}

Video.propTypes = {
  autoPlay: bool,
  controls: bool,
  height: number,
  onLoad: func,
  preload: bool,
  source: string.isRequired,
  width: number,
};

Video.defaultProps = {
  autoPlay: false,
  controls: false,
  height: 180,
  onLoad() {},
  preload: false,
  width: 320,
};

export default Video;
