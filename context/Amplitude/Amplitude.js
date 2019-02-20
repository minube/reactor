import { node, shape } from 'prop-types';
import React, { createContext, PureComponent } from 'react';
import { NetInfo } from 'react-native';
import { C } from 'BookingPath/common';

import ENV from '../../common/environment';
import SHAPE from '../../common/shape';
import {
  AsyncStore, fetch, Fingerprint, getCookie,
} from './modules';
import PKG from '../../package.json';

const { EVENTS } = C
const { IS_WEB, IS_SERVER } = ENV;
const { Provider, Consumer: ConsumerAmplitude } = createContext('reactor:amplitude');
const STORE_EVENTS = `${PKG.name}:events`;
const MINUBE_USER_ID = 'mn_user_id';
const AMPLITUDE_DATA = 'mn_amplitude_data';
let eventId = 1;

class ProviderAmplitude extends PureComponent {
  static propTypes = {
    children: node,
    session: shape(SHAPE.SESSION),
  };

  static defaultProps = {
    children: undefined,
    session: undefined,
  };

  state = {
    fingerprint: undefined,
    session: undefined,
  };

  async componentWillMount() {
    const { _syncEvents } = this;
    const { props: { session = {} } } = this;
    let fingerprint;
    let cookie;

    if (!IS_SERVER) {
      fingerprint = await new Fingerprint();
      if (IS_WEB) {
        const { deviceId, sessionId } = await AsyncStore.getItem(AMPLITUDE_DATA) || {};
        const userId = await AsyncStore.getItem(MINUBE_USER_ID);

        if (deviceId) session.device_id = deviceId;
        if (sessionId) session.session_id = sessionId;
        if (userId) session.user_id = userId;

        cookie = getCookie('reactor:request');
      }

      window.addEventListener(EVENTS.ON_COMPONENT_LOADED, (event) => {
        fetch(
          {
            ...fingerprint, // uuid & device_id
            ...session, // user_id && session_id && device_id
            userProperties: cookie ? JSON.parse(cookie) : cookie,
          },
          'session',
        );
      })
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
    const { state } = this;
    const events = await AsyncStore.getItem(STORE_EVENTS) || [];
    const isConnected = await NetInfo.isConnected.fetch();

    if (isConnected && events.length > 0) {
      await fetch(events); // @TODO: We should refactor this area
      await AsyncStore.setItem(STORE_EVENTS, []);
    }

    if (isConnected !== state.isConnected) this.setState({ isConnected });
  }

  _storeEvent = async (event) => {
    const events = await AsyncStore.getItem(STORE_EVENTS) || [];
    await AsyncStore.setItem(STORE_EVENTS, [...events, event]);
  }

  logEvent = ({ type, ...props } = {}) => {
    if (IS_SERVER) return;

    const {
      _storeEvent, state: { isConnected, fingerprint, session },
    } = this;

    const event = {
      ...fingerprint, // uuid & device_id
      ...session, // user_id && session_id && device_id
      event_id: eventId,
      event_properties: props,
      event_type: type,
      sequence_number: eventId,
    };
    eventId += 1;

    if (isConnected) fetch(event);
    else _storeEvent(event);
  }

  render() {
    const { logEvent, props: { children } } = this;

    return (
      <Provider value={{ logEvent }}>
        { children }
      </Provider>
    );
  }
}

export { ConsumerAmplitude, ProviderAmplitude };
