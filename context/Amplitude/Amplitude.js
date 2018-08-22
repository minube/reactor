import { node, shape, string } from 'prop-types';
import React, { createContext, PureComponent } from 'react';
import { NetInfo } from 'react-native';

import ENV from '../../common/environment';
import SHAPE from '../../common/shape';
import {
  AsyncStore, fetch, Fingerprint, getCookie,
} from './modules';
import PKG from '../../package.json';

const { IS_PRODUCTION, IS_WEB, IS_SERVER } = ENV;
const { Provider, Consumer: ConsumerAmplitude } = createContext();
const STORE_EVENTS = `${PKG.name}:events`;
const MINUBE_USER_ID = 'mn_user_id';
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
    session: undefined,
  };

  async componentWillMount() {
    const { _syncEvents, props: { key } } = this;
    let { props: { session = {} } } = this;
    let fingerprint;
    let cookie;

    if (!IS_SERVER) {
      fingerprint = await new Fingerprint();
      if (IS_WEB) {
        cookie = getCookie('reactor:request');
        session = { ...session, user_id: await AsyncStore.getItem(MINUBE_USER_ID) };
      }
      await fetch(
        key,
        { ...fingerprint, ...session, userProperties: cookie ? JSON.parse(cookie) : cookie },
        'identify',
      );
    }

    this.setState({
      isConnected: true,
      fingerprint,
      session: { ...session, session_id: new Date().getTime() },
    });

    if (!IS_SERVER) {
      _syncEvents();
      NetInfo.addEventListener('connectionChange', _syncEvents);
    }
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
      props: { key },
      state: { isConnected, fingerprint, session },
    } = this;

    const event = {
      ...fingerprint, // uuid & device_id
      ...session, // user_id && session_id
      event_id: eventId,
      event_properties: props,
      event_type: type,
      sequence_number: eventId,
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

export { ConsumerAmplitude, ProviderAmplitude };
