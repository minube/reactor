import { node, shape, string } from 'prop-types';
import React, { createContext, PureComponent } from 'react';
import { Platform } from 'react-native';

import ENV from '../../common/environment';
import SHAPE from '../../common/shape';
import { queryString } from './modules';
import PKG from '../../package.json';

const { IS_PRODUCTION, IS_WEB, IS_SERVER } = ENV;
const ENDPOINT = 'https://api.amplitude.com/httpapi';
const Context = createContext();
const { Provider, Consumer: ConsumerAmplitude } = Context;

class ProviderAmplitude extends PureComponent {
  _logEvent = ({ type, ...props } = {}) => {
    const { props: { key, session } } = this;

    if (!IS_PRODUCTION) console.info('⚡️ProviderAmplitude.LogEvent', type, props);

    if (IS_WEB) {
      if (!IS_SERVER) {
        const amplitude = require('amplitude-js').getInstance(); //eslint-disable-line
        amplitude.init(key);
        amplitude.logEvent(type, props);
      }
      return true;
    }

    return fetch(ENDPOINT, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      method: 'POST',
      body: queryString({
        api_key: key,
        event: JSON.stringify({
          ...session,
          event_type: type,
          event_properties: props,
          library: { name: PKG.name, version: PKG.version },
          platform: Platform.OS,
          timestamp: new Date().getTime(),
        }),
      }),
    });
  }

  render() {
    const { _logEvent, props: { children } } = this;

    return (
      <Provider value={{ logEvent: _logEvent }}>
        { children }
      </Provider>
    );
  }
}

ProviderAmplitude.propTypes = {
  children: node,
  key: string,
  session: shape(SHAPE.SESSION),
};

ProviderAmplitude.defaultProps = {
  children: undefined,
  key: IS_PRODUCTION ? '68fcc232a01a8a3490a4b59c9b819137' : '7c8dfb36a0efb5c6fe9d7e4940f3e3ae',
  session: undefined,
};

export { ConsumerAmplitude, ProviderAmplitude };
