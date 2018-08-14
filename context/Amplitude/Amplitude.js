import { node, shape, string } from 'prop-types';
import React, { createContext, PureComponent } from 'react';
import { NetInfo } from 'react-native';

import ENV from '../../common/environment';
import SHAPE from '../../common/shape';
import {
  AsyncStore, entropy, fetch, Fingerprint,
} from './modules';
import PKG from '../../package.json';

const { IS_PRODUCTION, IS_SERVER } = ENV;
const { Provider, Consumer: ConsumerAmplitude } = createContext();
const STORE_EVENTS = `${PKG.name}:events`;
let eventId = 1;

class ProviderAmplitude extends PureComponent {
  static propTypes = {
    children: node,
    key: string,
    session: shape(SHAPE.SESSION),
  };

  static defaultProps = {
    children: undefined,
    key: IS_PRODUCTION ? '68fcc232a01a8a3490a4b59c9b819137' : '7c8dfb36a0efb5c6fe9d7e4940f3e3ae',
    session: undefined,
  };

  state = {
    fingerprint: undefined,
    sessionId: undefined,
  };

  async componentWillMount() {
    const { _syncEvents } = this;

    this.setState({
      isConnected: true,
      fingerprint: await new Fingerprint(),
      sessionId: new Date().getTime(),
    });

    _syncEvents();
    NetInfo.addEventListener('connectionChange', _syncEvents);
  }

  _syncEvents = async () => {
    const { state, props: { key } } = this;
    const events = await AsyncStore.getItem(STORE_EVENTS) || [];
    const isConnected = await NetInfo.isConnected.fetch();

    if (isConnected && events.length > 0) {
      await fetch(key, events);
      await AsyncStore.setItem(STORE_EVENTS, []);
    }

    if (isConnected !== state.isConnected) this.setState({ isConnected });
  }

  _storeEvent = async (event) => {
    const events = await AsyncStore.getItem(STORE_EVENTS) || [];
    await AsyncStore.setItem(STORE_EVENTS, [...events, event]);
  }

  _logEvent = ({ type, ...props } = {}) => {
    if (IS_SERVER) return;

    const {
      _storeEvent,
      props: { key, session },
      state: { isConnected, fingerprint, sessionId },
    } = this;

    const event = {
      user_id: fingerprint,
      session_id: sessionId,
      ...session,
      // device_model: "Android",
      event_id: eventId,
      event_properties: props,
      event_type: type,
      language: entropy.locale,
      library: { name: PKG.name, version: PKG.version },
      os_name: entropy.vendor, // "Chrome Mobile"
      // os_version: '', // 70
      platform: entropy.platform,
      timestamp: new Date().getTime(),
      user_agent: entropy.userAgent,
      user_properties: entropy,
      // version_name: null
    };
    eventId += 1;

    if (isConnected) fetch(key, event);
    else _storeEvent(event);
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
